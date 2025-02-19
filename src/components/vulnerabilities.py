from src.exception import CustomException
from logging import Logger
from src.utils import MainUtils
from datetime import datetime
from src.constants import *
from src.logger import logger
import sys

class AddVulnerabilityData:
    def __init__(self):
        self.utils = MainUtils()
    
    def vul_table(self,data):
        try:
            json_data = []
            for idx,value in enumerate(data["Name"]):
                json_data.append({
                "id": data["Id"][idx],
                "name":value,
                "is_update": data["IsUpdate"][idx],
                "severity": data["Risk"][idx],
                "isFalsePositive": data["IsFalsePositive"][idx],
                "updatedAt": data["UpdatedAT"][idx],
                "createdAt": data["Identified On"][idx],
                "pentest": {"id": data["pentest_id"][idx], "name": data["pentest_name"][idx],"ptId": data["ptId"][idx]},
                "findingsAggregate": { "count": data["Assets Impacted"][idx] }
            })
            return json_data
        except Exception as e:
            raise CustomException(e,sys)
    
    def vul_details_data(self,data):
        try:
            pentest_data = []
            for idx,value in enumerate(data['vulnerability/name']):
                pentest_data.append(
                {
                    'id': "0x44e1a1"+str(idx),
                    'name': data['vulnerability/name'][idx],
                    'tags': data['vulnerablity/tags'][idx],
                    'description': data['vulnerability/description'][idx],
                    'recommendation': data['vulnerability/recommendation'][idx],
                    'cvssVector': data['vulnerability/cvssVector'][idx],
                    'cvsScore':data['cvssScore/exploitabilitySubscore'][idx],
                    'severity': data['severity/key'][idx],
                    'updatedAt': str(datetime.now()),
                    'createdAt': str(datetime.now()),   
                    'pentest': {'id': data['vulnerablity/pentest/id'][idx],                   
                                'name':data['vulnerablity/pentest/name'][idx]},
                    'findingsAggregate': {'count': data['Assets Impacted'][idx]},
                    'complianceStandards': [{'id': data['vulnerablity/complianceStandards/id'][idx],
                        'name': data['vulnerablity/complianceStandards/name'][idx]}],
                    'references': data['vulnerability/references/url'][idx],
                    'vulnerabilityStandards': [{'id': data['vulnerablity/vulnerablityStandards/id'][idx], 'name': data['vulnerablity/vulnerablityStandards/name'][idx]}],
                    'findings': [{'id': data['vulnerablity/findings/id'][idx], 
                                    'asset': {'id': data['vulnerablity/findings/asset/id'][idx],
                                            'name': data['vulnerablity/findings/asset/name'][idx]},
                                    'ipaddress': {'id':data['vulnerablity/ipaddress/id'][idx],
                                                'name':data['vulnerablity/findings/ipaddress/name'][idx]},
                                    'url': data['vulnerablity/findings/url'][idx],
                                    'findingPocs': [{'id': data['vulnerablity/findings/findingPocs'][idx],
                                                    'url':data['pocs/url'][idx]}]}]
                        }
                        )
            return pentest_data
        except Exception as e:
            raise CustomException(e,sys)
        
    def initiate_data_ingestion(self,data,sheet_name,section_name):
        if section_name!=type_of_data:
            logger.info(f":) Data Ingestion For {section_name} Section Started :)")
            df = self.utils.read_upload_file(data,sheet_name)
            fields = self.utils.required_fields(data_schema)
            df = self.utils.create_missing_field(df,fields)
            csv_json = self.utils.dataframe_json(df)
            upcoming_data = self.vul_table(csv_json)
            logger.info(":) Data Ingestion Completed :)")
            return upcoming_data
        else:
            logger.info(f":) Data Ingestion For {section_name} Section Started :)")
            df = self.utils.read_upload_file(data,sheet_name=None)
            fields = self.utils.required_fields(vul_metadata_schema)
            df = self.utils.create_missing_field(df,fields)
            csv_json = self.utils.dataframe_json(df)
            upcoming_data = self.vul_details_data(csv_json)
            logger.info(":) Data Ingestion Completed :)")
            return upcoming_data
        