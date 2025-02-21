import warnings
warnings.filterwarnings("ignore")
from fastapi import FastAPI, UploadFile, File,Form
from pydantic import BaseModel
from typing import List,Dict,Optional
from starlette.middleware.cors import CORSMiddleware
from src.utils import MainUtils
from src.components.vulnerabilities import AddVulnerabilityData
from src.components.assetDiscovery import AddassetDiscoveryData
from src.constants import *
from src.logger import logger
import uvicorn
vul_data_ingestor = AddVulnerabilityData()
AssetDiscovery_data_ingestor = AddassetDiscoveryData()
utils = MainUtils()

app = FastAPI()

logger.info(":) LOGGING START :)")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)



class VulnerabilityData(BaseModel): 
    vulnerability_section : str 
    sheet_name : Optional[str]


class AssetDiscovery(BaseModel):
    section_name : str
    sheet_name : Optional[str]



@app.get("/")
def home():
    return ":) welcome :)"

@app.post("/updateVulnerabilities")
def update_vulnerability_json(vulnerability_section:str=Form(...),data:UploadFile=File(...),sheet_name: Optional[str]=Form(None)):
    if sheet_name=='':
        upcoming_data = vul_data_ingestor.initiate_data_ingestion(data,None,vulnerability_section)
    else:
        upcoming_data = vul_data_ingestor.initiate_data_ingestion(data,sheet_name,vulnerability_section)
    logger.info(":) OVERWRITING JSON FILE :)")
    vulnerability_data = utils.read_json_file(vulnerabilities_file)
    if vulnerability_section in list(vulnerability_data.keys()):
        variable_name = list(vulnerability_data[vulnerability_section].keys())[0]
        vulnerability_data[vulnerability_section][variable_name]=upcoming_data
        utils.write_json_file(vulnerabilities_file,vulnerability_data)
        logger.info(":) OVERWRITING COMPLETED :)")
        return {
            "sucess":True,
            "data_added":upcoming_data
        }
    else:
        return {
            "sucess":False,
            "error":"Invalid Section Name "
        }

@app.get('/getVulnerabilities')
def get_vulnerability_json():
    vulnerability_data = utils.read_json_file(vulnerabilities_file)
    return {'sucess':True,"data":vulnerability_data}


@app.post('/updateAssetDiscovery')
def update_asset_discovery(section_name:str=Form(...),data:UploadFile=File(...),sheet_name:Optional[str]=Form(None)):
    if sheet_name=='':
        upcoming_data = AssetDiscovery_data_ingestor.initiate_data_ingestion(data,None,section_name)
    else:
        upcoming_data = AssetDiscovery_data_ingestor.initiate_data_ingestion(data,sheet_name,section_name)
    assetDiscoveryData = utils.read_json_file(assetDiscovery_file)
    if section_name in list(assetDiscoveryData.keys()):
        variable_name = list(assetDiscoveryData[section_name].keys())[0]
        assetDiscoveryData[section_name][variable_name] = upcoming_data
        utils.write_json_file(assetDiscovery_file,assetDiscoveryData)
        return {
            "success":True,
            "data_added":upcoming_data
        }
    else:
        return {"success":True,"error":"Invalid section name"}


@app.get("/getassetDiscovery")
def get_asset_discovery():
    assetDiscoveryData = utils.read_json_file(assetDiscovery_file)
    return {"success":True,"data":assetDiscoveryData}



if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="localhost",
        port=8000,
        reload=True
        )


