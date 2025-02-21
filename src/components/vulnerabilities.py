from src.exception import CustomException
from logging import Logger
from src.utils import MainUtils
from datetime import datetime
from src.constants import *
from src.logger import logger
import numpy as np
import sys

class AddVulnerabilityData:
    def __init__(self):
        self.utils = MainUtils()


    def asset_vulnerabilites(self,data):
        json_data = []
        def finding_data(id,wfname,execution_id,findingType):
            data = []
            if type(id)==list:
                for idx in range(len(id)):
                    data.append({
                        "id": id[idx],
                        "wfName": wfname[idx],
                        "executionId": execution_id[idx],
                        "findingType": findingType[idx],
                    })
                return data
            else:
                data.append({
                        "id": id,
                        "wfName": wfname,
                        "executionId": execution_id,
                        "findingType": findingType,
                    })
                return data
        def checkId(value):
            if value=="NULL":
                return "0x430"
            else:
                return value
        def checkdate(value):
            if value=="NULL":
                date = str(datetime.now())  
                return date
            else:
                return datetime.strptime(value, "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S")  

        def checkcvssvector(value):
            if value=="NULL":
                return "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N"
            else:
                return value

        def checkcvssScore(value):
            if value=="NULL":
                return np.random.uniform(1, 10)
            else:
                return value     
        for idx,value in enumerate(data["Name"]):
            json_data.append({
                "id": str(checkId(data["Id"][idx]))+str(idx),
                "name": value,
                "pentestName": data["pentestName"][idx],
                "is_update": data["IsUpdate"][idx],
                "tags" : data["tags"][idx],
                "description":data["description"][idx],
                "recommendation":data["recommendation"][idx],
                "cvssVector":checkcvssvector(data["cvssVector"][idx]),
                "cvssScore":checkcvssScore(data["cvssScore"][idx]),
                "severity": str(data["Risk"][idx]).upper(),
                "isFalsePositive": data["IsFalsePositive"][idx],
                "updatedAt": checkdate(data["UpdatedAT"][idx]),
                "createdAt": datetime.strptime(data["Identified On"][idx], "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S"),
                "pentest": {"id": data["pentest_id"][idx], "name": data["pentest/name"][idx]},
                "findings":finding_data(data["findings/id"][idx],data["findings/wfName"][idx],data["findings/executionId"][idx],data["findings/findingType"][idx]),
                "findingsAggregate": { "count": data["Assets Impacted"][idx] }
            })
        return json_data

    def pentest_vulnerabilities(self,data):
        json_data=[]
        def checkId(value):
            if value=="NULL":
                return "0x430"
            else:
                return value
            
        def checkdate(value):
            if value=="NULL":
                date = str(datetime.now())  
                return date
            else:
                return datetime.strptime(value, "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S")
            

        def checkfindings(id,wfname,execution_id,findingType,isManual,asset_id,asset_name,asset_isarchived,ipaddress,url,findingPocs):
            finding_data = []
            if type(id)==list:
                for idx in range(len(id)):
                    finding_data.append(
                        {
                        "id": id[idx],
                        "wfName": wfname[idx],
                        "executionId": execution_id[idx],
                        "findingType": findingType[idx],
                        "isManual":isManual[idx],
                        "asset": {
                                "id": asset_id[idx],
                                "name": asset_name[idx],
                                "isArchived": asset_isarchived[idx],
                            },
                            "ipaddress": ipaddress[idx],
                            "url": url[idx],
                            "findingPocs": [{ "id": findingPocs[idx] }]

                        })
                return finding_data
            else:
                finding_data.append({
                        "id": id,
                        "wfName": wfname,
                        "executionId": execution_id,
                        "findingType": findingType,
                        "isManual":isManual,
                        "asset": {
                                "id": asset_id,
                                "name": asset_name,
                                "isArchived": asset_isarchived,
                            },
                            "ipaddress": ipaddress,
                            "url": url,
                            "findingPocs": [{ "id": findingPocs }]

                        })
                return finding_data
        def checkdate(value):
            if value=="NULL":
                date = str(datetime.now())  
                return date
            else:
                return datetime.strptime(value, "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S")
        
        def checkcvssvector(value):
            if value=="NULL":
                return "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N"
            else:
                return value

        def checkcvssScore(value):
            if value=="NULL":
                return np.random.uniform(1, 10)
            else:
                return value
            
        for idx,value in enumerate(data["Name"]):
            json_data.append( {
                "id": str(checkId(data["Id"][idx]))+str(idx),
                "name": data["Name"][idx],
                "tags" : data["tags"][idx],
                "description":data["description"][idx],
                "recommendation":data["recommendation"][idx],
                "cvssVector":checkcvssvector(data["cvssVector"][idx]),
                "cvssScore":checkcvssScore(data["cvssScore"][idx]),
                "severity": str(data["Risk"][idx]).upper(),
                "updatedAt": checkdate(data["UpdatedAT"][idx]),
                "createdAt":datetime.strptime(data["Identified On"][idx], "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S"),
                "pentest": {"id": data["pentest_id"][idx],"name": data["pentest/name"][idx],"ptId": data["pentest/ptId"][idx]},
                "findings": checkfindings(data["findings/id"][idx],data["findings/wfName"][idx],data["findings/executionId"][idx],data["findings/findingType"][idx],data["findings/isManual"][idx],data["findings/asset/id"][idx],data["findings/asset/name"][idx],data["findings/asset/isArchived"][idx],data["findings/ipaddress"][idx],data["findings/url"][idx],data["findings/findingPocs/id"][idx]),
                "findingsAggregate": { "count": data["Assets Impacted"][idx] }
            })
        return json_data
    
    def vul_details_data(self,data):
        try:
            def checkfindingsaggCount(value):
                if value=="NULL" or value=="Null" or value==np.nan:
                    val =  np.random.randint(1, 11)
                    return val
                else:
                    return value
                
            def checkvulstd(value):
                if value=="NULL" or value=="Null" or value==np.nan:
                    val = np.random.choice(["OWASP TOP 10 - A01:2021-Broken Access Control","OWASP ASVS - V1.1 Secure Software Development Lifecycle Requirements","OWASP TOP 10 - A01:2021-Broken Access Control"])
                    return val
                else:
                    return value
                
            def checkcomstd(value):
                if value=="NULL" or value=="Null" or value==np.nan:
                    val = np.random.choice(["SOC 2 - CC 6.1","ISO 27001 - Clause 4.1.3","A01:2021-Broken Access Control","V1.1 Secure Software Development Lifecycle Requirements"])
                    return val
                else:
                    return value
                
            pentest_data = []
            for idx,value in enumerate(data['vulnerability/name']):
                pentest_data.append(
                {
                    'id': "0x44e1a1"+str(idx),
                    'name': value,
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
                    'findingsAggregate': {'count': checkfindingsaggCount(data['Assets Impacted'][idx])},
                    'complianceStandards': [{'id': data['vulnerablity/complianceStandards/id'][idx],
                        'name': checkcomstd(data['vulnerablity/complianceStandards/name'][idx])}],
                    'references': data['vulnerability/references/url'][idx],
                    'vulnerabilityStandards': [{'id': data['vulnerablity/vulnerablityStandards/id'][idx], 'name': checkvulstd(data['vulnerablity/vulnerablityStandards/name'][idx])}],
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
    
    def findingPOC(self,data):
        def checkports(value):
            if value=="NULL":
                return ["8000","8081"]
            else:
                return value
        def checkendpoint(value):
            if value=="NULL":
                return [
					"https://api.example.com/endpoint1",
					"https://api.example.com/endpoint2",
					"https://api.example.com/endpoint3",
				]
            else:
                return value
        def checkdate(value):
                if value=="NULL":
                    return datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S.%f") + "Z"
                else:
                    return datetime.strptime(value, "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S")
        json_data = []
        for idx,value in enumerate(data["vulnerability/name"]):
            json_data.append({
			"id": "0x44e1a1"+str(idx),
			"urls": data["vulnerability/references/url"][idx],
			"description": data["vulnerability/description"][idx],
            "poc":data["pocs/url"][idx],
			"ports": checkports(data["ports"][idx]),
			"endpoints": checkendpoint(data["endpoints"][idx]),
			"updatedAt":checkdate(data["UpdatedAt"][idx])
			})
        return {"findingPocs":json_data,"findingPocsAggregate":{"count":len(json_data)}}

    def initiate_data_ingestion(self,data,sheet_name,section_name):
        if section_name=="PTaaS":
            logger.info(f":) Data Ingestion For {section_name} Section Started :)")
            df = self.utils.read_upload_file(data,sheet_name)
            df = self.utils.processed_csv_slash_fields(df)
            fields = self.utils.required_fields(ptaas_vulnerability_schema)
            df = self.utils.create_missing_field(df,fields)
            csv_json = self.utils.dataframe_json(df)
            upcoming_data = self.pentest_vulnerabilities(csv_json)
            logger.info(":) Data Ingestion Completed :)")
            return upcoming_data
        elif section_name=="ASM":
            logger.info(f":) Data Ingestion For {section_name} Section Started :)")
            df = self.utils.read_upload_file(data,sheet_name)
            df = self.utils.processed_csv_slash_fields(df)
            fields = self.utils.required_fields(asset_vulnerability_schema)
            df = self.utils.create_missing_field(df,fields)
            csv_json = self.utils.dataframe_json(df)
            upcoming_data = self.asset_vulnerabilites(csv_json)
            logger.info(":) Data Ingestion Completed :)")
            return upcoming_data
        
        elif section_name=="POC":
            logger.info(f":) Data Ingestion For {section_name} Section Started :)")
            df = self.utils.read_upload_file(data,sheet_name)
            df = self.utils.processed_csv_slash_fields(df)
            fields = self.utils.required_fields(finding_pocs_schema)
            df = self.utils.create_missing_field(df,fields)
            csv_json = self.utils.dataframe_json(df)
            upcoming_data = self.findingPOC(csv_json)
            logger.info(":) Data Ingestion Completed :)")
            return upcoming_data

        else:
            logger.info(f":) Data Ingestion For {section_name} Section Started :)")
            df = self.utils.read_upload_file(data,sheet_name=None)
            df = self.utils.processed_csv_slash_fields(df)
            fields = self.utils.required_fields(vul_metadata_schema)
            df = self.utils.create_missing_field(df,fields)
            csv_json = self.utils.dataframe_json(df)
            upcoming_data = self.vul_details_data(csv_json)
            logger.info(":) Data Ingestion Completed :)")
            return upcoming_data
