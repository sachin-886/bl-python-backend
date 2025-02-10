import warnings
warnings.filterwarnings("ignore")
from fastapi import FastAPI, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import List,Dict
import pandas as pd
from src.utils import *
import os
import uvicorn


app = FastAPI()


class get_data(BaseModel):
    section_name : str
    table_name : str

class UpdateData(BaseModel):
    file_name:str
    field_name:str
    data : dict
    json_file_to_save: str

@app.get("/")
def home():
    return ":) welcome "

@app.post("/upload_csv")
async def csv_to_json(file: UploadFile = File(...)):
    try:
        # Check file extension
        if file.filename.endswith('.csv'):
            df = pd.read_csv(file.file)
        elif file.filename.endswith(('.xls', '.xlsx')):
            df = pd.read_excel(file.file)
            df = processed_csv(df)
            schema = json_schema()
            expected_fields = extract_unique_values_form_schema(schema)
            df = create_missing_field(df,expected_fields)
            data_df = extracting_data(df)
            pentest_data = {
                "pentestVulnerabilityData": {"queryPentestVulnerability":[]},
                }
            data = add_data_to_json(pentest_data,data_df)
            write_json('pentest.json',data)
            return data
        else:
            raise HTTPException(status_code=400, detail="Unsupported file type. Please upload a CSV or Excel file.")
        
        # Perform processing (Modify this section as needed)
        json_output = df.to_dict(orient="records")
        
        return {"data": json_output}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



@app.get("/get_data")
def fetch_data(file_name: str, field_name: str):
    try:
        data = read_file(file_name)
        return data[field_name]
    except Exception as e:
        print(e)

@app.post("/update_data")
def update(update_request:UpdateData):
    try:
        file_name = update_request.file_name
        field_name = update_request.field_name
        data = update_request.data
        new_json_file = update_request.json_file_to_save
        file_data = read_file(file_name)
        file_data[field_name] = field_name
        write_json(new_json_file,file_data)
        return {"sucess":True}
    except Exception as e:
        print(e)

    

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="localhost",
        port=8000,
        reload=True
        )


