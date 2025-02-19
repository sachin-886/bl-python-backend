import json 
import os
import re
import pandas as pd
from collections import defaultdict
import pandas as pd
from src.exception import CustomException
import sys
   

class MainUtils:
   def __init__(self)->None:
      pass
   
   def processed_csv_slash_fields(self,df:pd.DataFrame)->pd.DataFrame:
    try:
      column_groups = defaultdict(lambda: defaultdict(list))
      pattern = re.compile(r"^(.*?)/\d+/(.*)$")
      for col in df.columns:
        match = pattern.match(col)
        if match:
          prefix, suffix = match.groups()
          column_groups[prefix][suffix].append(col)
      for prefix, suffix_dict in column_groups.items():
        for suffix, cols in suffix_dict.items():
          merged_col_name = f"{prefix}/{suffix}"
          df[merged_col_name] = df[cols].apply(lambda row: [val for val in row if pd.notna(val)], axis=1)
          df.drop(columns=cols, inplace=True)  
      return df
    except Exception as e:
       raise CustomException(e,sys)
 
   def create_missing_field(self,df,expected_field):
    try:
      excel_field = df.columns
      for field in expected_field:
        if field not in excel_field:
          df[field] = 'NULL'
      return df
    except Exception as e:
       raise CustomException(e,sys)

   def required_fields(self,data, values_set=None):  
    try:     
      if values_set is None:
          values_set = set()

      if isinstance(data, dict):
          for value in data.values():
            self.required_fields(value, values_set)
      elif isinstance(data, list):
        for item in data:
          self.required_fields(item, values_set)
      else:
        values_set.add(data)    
      return sorted(values_set)
    except Exception as e:
       raise CustomException(e,sys)


   def dataframe_json(self,df):
    try:
      data = {}
      df.fillna("Null",inplace=True)
      for column in list(df.columns):
        data[column] = list(df[column])
      return data
    except Exception as e:
       raise CustomException(e,sys)

   def read_json_file(self,file_name):
      try:
        with open(f"data/{file_name}.json",'r',encoding="utf-8") as file:
            data = json.load(file)
        return data
      except Exception as e:
         raise CustomException(e,sys)

   def write_json_file(self,file_name,data):
      try:
        with open(f"data/{file_name}.json","w",encoding="utf-8") as file:
            json.dump(data, file, ensure_ascii=False, indent=4)
      except Exception as e:
         raise CustomException(e,sys)



   def read_upload_file(self,data,sheet_name):
      try:
        filetype = self.checkFileType(data)
        if sheet_name!=None:
          if filetype=='csv':
              df = pd.read_csv(data.file)
          if filetype in ('xlsx','xls'):
              df = pd.read_excel(data.file,sheet_name=sheet_name)
        else:
          if filetype=='csv':
              df = pd.read_csv(data.file)
          if filetype in ('xlsx','xls'):
              df = pd.read_excel(data.file)
        return df
      except Exception as e:
         raise CustomException(e,sys)



   def checkFileType(self,data):
      try:
        if data.filename.endswith('csv'):
          return 'csv'
        elif data.filename.endswith('xlsx'):
            return 'xlsx'
        elif data.filename.endswith('xls'):
          return 'xls'
        else:
          return "file format not supported"
      except Exception as e:
         raise CustomException(e,sys)