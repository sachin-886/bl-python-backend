from src.exception import CustomException
from src.utils import MainUtils
from datetime import datetime
from src.constants import *
from src.logger import logger
import sys
import numpy as np

class AddassetDiscoveryData:
    def __init__(self):
        self.utils = MainUtils()

    def domain_data_table(self,data):
        try:
            domain_data=[]
            def checkautoAdded(value):
                if value=="NULL":
                    return True
                else:
                    return value

            def checkassetcount(value):
                if value=="NULL":
                    return 21
                else:
                    return value
            def checkasnscount(value):
                if value=="NULL":
                    return 1
                else:
                    return value
                
            def checkvulncount(value):
                if value=="NULL":
                    return 50
                else:
                    return value
            def checkId(value):
                splitted = value.split('.')
                print(splitted[0]+"Main")
                return splitted[0]+"Main"
            for idx,value in enumerate(list(set(data["Name"]))):
                domain_data.append({
                    "id": checkId(value),
                    "name": value,
                    "isAutoAdded": checkautoAdded(data["IsAutoAdded"][idx]),
                    "assetsAggregate": {
                        "count": checkassetcount(data["AssetsAggregate_count"][idx]),
                        },
                    "asnsAggregate": {
                        "count": checkasnscount(data["AsnsAggregate_count"][idx]),
                        },
                    "vulnerabilitiesAggregate": {
                        "count": checkvulncount(data["VulnerabilitiesAggregate_count"][idx]),
                        },
                        })
            return domain_data
        except Exception as e:
            raise CustomException(e,sys)
        
    def subdomain_data_table(self,data):
        try:
            subdomain_data = []
            def checkId(value):
                id = value.split('.')
                return id[-2]+'Main'
            def checkAutoAdded(value):
                if value == "Manually Added":
                    return False
                else:
                    return True
            def checkwebsite(value):
                if value == "Active":
                    return True
                else:
                    return False
            def checkAgg(value):
                if value=="NULL":
                    return 0
                else:
                    return value

            for idx,value in enumerate(data["Name"]):
                subdomain_data.append( {
                    "id": checkId(value),
                    "name": data["Subdomains"][idx],
                    "isAutoAdded": checkAutoAdded(data["Asset Label"][idx]),
                    "hasWebsite": checkwebsite(data["Status"][idx]),
                    "ipaddressesAggregate": { "count": checkAgg(data["IpAddressAggregate"][idx]) },
                    "dnsrecordsAggregate": { "count": checkAgg(data["DnsrecordsAggregate"][idx]) },
                    "findingsAggregate": { "count": checkAgg(data["Vulnerability Count"][idx]) },
                    "updatedAt": data["Discovered On"][idx],
                        })
            return subdomain_data
        except Exception as e:
            raise CustomException(e,sys)

    def ip_address_data_table(self,data):
         try:
            ip_address_data = []
            def checkId(value):
                ids = ["brokencrystalsMain","ascenderMain","vulnwebMain","scanmeMain","testparkerMain","computerkornerMain","testfireMain","tuitionrewardsMain","acmeMain"]
                if value=="NULL" or value==np.nan:
                    id = np.random.choice(ids) 
                    return id
                else :
                    return value
            def check_ip_block_name(value):
                if value=="NULL" or value==np.nan:
                    return ""
                else:
                    return value
            def checkAutoAdded(value):
                if value=="NULL" or value==np.nan:
                    return True
                else:
                    return value
            def checkorg(value):
                if value=="NULL" or value==np.nan:
                    return "breach"
                else:
                    return value
                
            for idx,value in enumerate(data["Name"]):
                ip_address_data.append( {
                        "id":checkId(data["Id"][idx]),
                        "name": value,
                        "isAutoAdded": checkAutoAdded(data["IsAutoAdded"][idx]),
                        "country":data["Country"][idx],
                        "org": checkorg(data["Organisation"][idx]),
                        "ipblock": {
                            "name": check_ip_block_name(data["IpblockName"][idx]),
                            },
                        "updatedAt": data["Discovered On"][idx],
                        })
            return {"queryIPAddress":ip_address_data,"aggregateIPAddress":{"count":len(ip_address_data)}}
         except Exception as e:
             raise CustomException(e,sys)
    
    def url_data_table(self,data):
         try:
            url_data = []
            def checkbool(value):
                if value == "NULL":
                    return True
            def checkagg(value):
                if value == "NULL":
                    return 0
            def checkDomainName(value):
                if value=="NULL":
                    return "breachlock.com"
            def checkId(value):
                if value=="NULL":
                    return "04x3"
                else:
                    return value
            def checkdate(value):
                if value=="NULL":
                    date = str(datetime.now())  
                    return date
                else:
                    return datetime.strptime(value, "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S")
            for idx,value in enumerate(data["Endpoints URL"]):
                url_data.append({
                    "id": checkId(data["Id"][idx])+str(idx),
                    "name": value,
                    "endpointsAggregate": {
                        "count": data["Total Requests"][idx],
                        },
                    "isAutoAdded": checkbool(data["IsAutoAdded"][idx]),
                    "isReachable": checkbool(data["IsReachable"][idx]),
                    "findingsAggregate": {
                        "count": checkagg(data["FindingsAggregate"][idx]),
                        },
                    "updatedAt": checkdate(data["UpdatedAt"][idx]),
                    "domains": [
                        {
                            "id": checkId(data["DomainsId"][idx]),
                            "name": checkDomainName(data["DomainsName"][idx]),
                        },
                        ],
                    })
            return {"queryURL":url_data,"aggregateURL":{"count":len(url_data)}}
         except Exception as e:
             raise CustomException(e,sys)
         
    def asn_data(self,data):
        try:
            json_data=[]
            def checkId(value):
                id = value.split('.')
                return id[-2]+"Main"
            
            def checkorg(value):
                if value=="NULL":
                    return "Breachlock"
                else:
                    return value
            def checkdate(value):
                if value=="NULL":
                    return datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S.%f") + "Z"
                else:
                    return datetime.strptime(value, "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S")
            for idx,value in enumerate(data["Name"]):
                json_data.append({
                    "id": checkId(value),
                    "name": data["Subdomains"][idx],
                    "orgName": checkorg(data["orgName"][idx]),
                    "updatedAt": checkdate(data["Identified On"][idx])
                    })
            return {
                "asns":json_data,
                "aggregateASN":{"count":len(json_data)}
            }
        except Exception as e:
            raise CustomException(e,sys)
    
    def ip_block_data_table(self,data):
         try:
            ip_block_data = []
            for idx,value in enumerate(data["Name"]):
                ip_block_data.append({
                            "id": data["Id"][idx],
                            "name": value,
                            "isAutoAdded": data["IsAutoAdded"][idx],
                            "asn": {
                                    "name": data["asnName"][idx],
                                "orgName": data["Organisation"][idx],
                                },
                            "ipaddressesAggregate": {
                                    "count": data["IpaddressAggregate"][idx],
                                },
                            "updatedAt": data["UpdatedAt"][idx],
                        })
            return ip_block_data
         except Exception as e:
             raise CustomException(e,sys)
        
    def asset_group_data_table(self,data):
         try:
            asset_data = []
            for idx,value in enumerate(data["Name"]):
                asset_data.append({
                            "name":value,
                            "id": data["Id"][idx],
                            "assetType": data["AssetType"][idx],
                            "assetsAggregate": {
                                "count": data["AssetAggregate"][idx],
                                },
                            "ipaddressesAggregate": {
                                "count": data["IpAddressAggregate"][idx],
                                },
                        "vulnerabilityCount": data["VulnearabilityCount"][idx],
                        "updatedAt": data["UpdatedAt"][idx],
                        "isArchived": data["isArchived"][idx],
                        "description": data["Description"][idx],
                        "domain": { "id": data["DomainId"][idx], "name": data["DomainName"][idx] },
                                })
            return asset_data
         except Exception as e:
             raise CustomException(e,sys)

    def domain_vulnerabilities_table(self,data):
        try:
            json_data = []
            def checkId(value):
                ids = ["brokencrystalsMain","ascenderMain","vulnwebMain","scanmeMain","testparkerMain","computerkornerMain","testfireMain","tuitionrewardsMain","acmeMain"]
                if value=="NULL":
                    id = np.random.choice(ids) 
                    return id
                else :
                    return value
            
            def checkcvss(value):
                if value=="Null" or value=="NULL":
                    return np.random.uniform(1,10)
                else:
                    return value
            def checkdate(value):
                if value=="NULL":
                    return str(datetime.now())
                else:
                    return value
            for idx,value in enumerate(data['vulnerability/name']):
                json_data.append({
                "id": checkId(data["Id"][idx]),
                "name": value,
                "severity": data["severity/key"][idx],
                "cvssScore": checkcvss(data["cvssScore/baseScore"][idx]),
                "updatedAt": checkdate(data["Identified On"][idx]),
                })
            return {"id":"0x4","vulnerabilities":json_data,"vulnerabilitiesAggregate":{"count":len(json_data)}}
        except Exception as e:
            raise CustomException(e,sys)

    def subdomain_ipAddress_table(self,data):
        try:
            def checkId(value):
                ids = ["brokencrystalsMain","ascenderMain","vulnwebMain","scanmeMain","testparkerMain","computerkornerMain","testfireMain","tuitionrewardsMain","acmeMain"]
                if value=="NULL":
                    id = np.random.choice(ids) 
                    return id
                else :
                    return value
            def checkipblock(value):
                if value=="Null" or value=="NULL" or value==np.nan:
                    return "null"
                else:
                    return value
            json_data = []
            for idx,value in enumerate(data["Name"]):
                json_data.append({
                    "id": checkId(data["Id"][idx]),
                    "name": value,
                    "country": data["Country"][idx],
                    "org": data["Address"][idx],
                    "ipblock": checkipblock(data["IP Block"][idx]),
                    "updatedAt": data["Discovered On"][idx],
                })
            return {"ipaddresses":json_data,"ipaddressesAggregate":{"count":len(json_data)}}
        except Exception as e:
            raise CustomException(e,sys)

    def subdomain_vulnerabilites_table(self,data):
        json_data =[]
        read_data = self.utils.read_json_file(assetDiscovery_file)
        ids = [obj["id"] for obj in read_data["Domain"]["queryDomain"]]
        def checkId(value,index,id):
            if value.upper()=="NULL":
                return id[index]
            else:
                return value
        def checkautoadded(value):
            if value.upper()=="NULL":
                return True
            else:
                return value
        def checkfalsepositive(value):
            if value.upper()=="NULL":
                return False
            else:
                return value
        def checkbool(value):
            if value.upper()=="NULL":
                return False
            else:
                return value
            
        def checkdate(value):
                if value.upper()=="NULL":
                    return datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S.%f") + "Z"
                else:
                    return datetime.strptime(value, "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S")
        
        def checkfindingType(value):
            if value.upper()=="NULL":
                return np.random.choice(["N/A","Rediscovered","New Discovered"])
            else:
                return value
        def checkwfName(value):
            if value.upper()=="NULL":
                return "ngsam-nw-0-0-1-cggh8ukq"
            else:
                return value
        def checkcvss(value):
            if value=="NULL" or value=="Null":
                return np.random.uniform(1,11)
            else:
                return value
        for idx,value in enumerate(data["vulnerability/name"]):
            index = np.random.choice([i for i in range(len(ids))])
            json_data.append({
			"id": checkId(data["Id"][idx],index,ids),
			"name": value,
			"vulnerability": {
				"cvssScore":checkcvss(data["cvssScore/baseScore"][idx]),
				"severity": str(data["severity/key"][idx]).upper(),
				"id": checkId(data["Id"][idx],index,ids),
				"name": data["vulnerability/name"][idx],
				},
			"wfName": checkwfName(data["wfName"][idx]),
			"isAutoAdded": checkautoadded(data["IsAutoAdded"][idx]),
			"isFalsePositive": checkfalsepositive(data["IsFalsePositive"][idx]),
			"isManual": checkbool(data["isManual"][idx]),
			"isPatched": checkbool(data["isPatched"][idx]),
			"updatedAt": checkdate(data["UpdatedAt"][idx]),
			"findingType": checkfindingType(data["findingType"][idx]),
			})
        return {"id":"0x58ff","findings":json_data}    

    def dns_data_table(self,data):
        try:
            def checkId(value):
                ids = ["brokencrystalsMain","ascenderMain","vulnwebMain","scanmeMain","testparkerMain","computerkornerMain","testfireMain","tuitionrewardsMain","acmeMain"]
                if value=="NULL":
                    id = np.random.choice(ids) 
                    return id
                else :
                    return value
                
            def checkRecord(value):
                if value=="NULL":
                    return np.random.choice(["A","CNAME"])
                else:
                    return value
            json_data =[]
            for idx,value in enumerate(data["Name"]):
                json_data.append({
                "id": checkId(data["Id"][idx]),
                "name": value,
                "record": checkRecord(data["Record"][idx]),
                "updatedAt": data["Discovered On"][idx]
                })
            return {"dnsrecords":json_data,"dnsrecordsAggregate":len(json_data)}
        except Exception as e:
            raise CustomException(e,sys)

    def ipblockIpAddress_table(self,data):
        json_data=[]
        read_data = self.utils.read_json_file(assetDiscovery_file)
        ids = [obj["id"] for obj in read_data["IpBlocks"]["data"]["queryIPBlock"]]
        ip_block_name = [id.split("breachlock_")[1] for id in ids]
        def checkorg(value):
            if value=="NULL":
                return np.random.choice(["Microsoft Corporation","Google Inc","Alphabet"])
            else:
                return value
        for idx,value in enumerate(data["Name"]):
            index = np.random.choice([i for i in range(len(ids))])
            json_data.append({
			"id": ids[index],
			"name": value,
			"country": data["Country"][idx],
			"org": checkorg(data["ORG"][idx]),
			"ipblock": {
				"name": ip_block_name[index],
				},
			"updatedAt": data["Discovered On"][idx],
			})
        return{"ipaddresses":json_data,"ipaddressesAggregate":{"count":len(json_data)}}

    def assetGroupVulnerability(self,data):
        def checkAssetCount(value):
            if value=="NULL" or value=="Null":
                return np.random.randint(1,11)
            else:
                return value
        def checkcvss(value):
            if value=="NULL" or value=="Null":
                return np.random.uniform(1,11)
            else:
                return value
        def checkseverity(value):
            if value=="NULL" or value=="Null":
                return np.random.choice(["HIGH","CRITICAL","INFORMATIONAL","LOW"])
            else:
                return value
        def checkfindingType(value):
            if value=="NULL" or value=="Null":
                return "New Discovered"
            else:
                return value 
        json_data = []
        for idx,value in enumerate(data["vulnerability/name"]):
            json_data.append({
			"name": value,
			"impactedAssetCount": checkAssetCount(data["Assets Impacted"][idx]),
			"findingType": checkfindingType(data["FindingType"][idx]),
			"cvssScore": checkcvss(data["cvssScore/baseScore"][idx]),
			"severity": checkseverity(data["severity/key"][idx]),
			})
        return {"total":len(json_data),"vulnerabilities":json_data}
    
    def assetGroupSubdomain(self,data):
        try:
            subdomain_data = []
            def checkId(value):
                if value=="NULL":
                    return np.random.choice(["875e9ac84698417a856fe956c522e0fc","b11f91e847b246f1a3685833f5475a58"])
                else:
                    return value
            def checkAutoAdded(value):
                if value == "Manually Added":
                    return False
                else:
                    return True
            def checkwebsite(value):
                if value == "Active":
                    return True
                else:
                    return False
            def checkAgg(value):
                if value=="NULL":
                    return 0
                else:
                    return value

            for idx,value in enumerate(data["Name"]):
                subdomain_data.append( {
                    "id": checkId(data["Id"][idx]),
                    "name": data["Subdomains"][idx],
                    "isAutoAdded": checkAutoAdded(data["Asset Label"][idx]),
                    "hasWebsite": checkwebsite(data["Status"][idx]),
                    "ipaddressesAggregate": { "count": checkAgg(data["IpAddressAggregate"][idx]) },
                    "dnsrecordsAggregate": { "count": checkAgg(data["DnsrecordsAggregate"][idx]) },
                    "findingsAggregate": { "count": checkAgg(data["Vulnerability Count"][idx]) },
                    "updatedAt": data["Discovered On"][idx],
                        })
            return {"id":"0xa17c","name":"Test2","assets":subdomain_data}
        except Exception as e:
            raise CustomException(e,sys)
    
    def assetGroupIPAddress(self,data):
        try:
            ip_address_data = []
            def checkId(value):
                if value=="NULL" or value==np.nan:
                    return np.random.choice(["875e9ac84698417a856fe956c522e0fc","b11f91e847b246f1a3685833f5475a58"])
                else :
                    return value
            def check_ip_block_name(value):
                if value=="NULL" or value==np.nan:
                    return ""
                else:
                    return value
            def checkAutoAdded(value):
                if value=="NULL" or value==np.nan:
                    return True
                else:
                    return value
            def checkorg(value):
                if value=="NULL" or value==np.nan:
                    return "breach"
                else:
                    return value
                
            for idx,value in enumerate(data["Name"]):
                ip_address_data.append( {
                        "id":checkId(data["Id"][idx]),
                        "name": value,
                        "isAutoAdded": checkAutoAdded(data["IsAutoAdded"][idx]),
                        "country":data["Country"][idx],
                        "org": checkorg(data["Organisation"][idx]),
                        "ipblock": {
                            "name": check_ip_block_name(data["IpblockName"][idx]),
                            },
                        "updatedAt": data["Discovered On"][idx],
                        })
            return {
		        "id": "0x4e201",
		        "assetType": "IP",
		        "name": "Group1_IpAdress",
		        "ipaddressesAggregate": {
			        "count": len(ip_address_data),},
                "ipaddresses":ip_address_data
                    }
        except Exception as e:
             raise CustomException(e,sys)

    def subdomain_ip_asset_activities(self,data,section_name):
        json_data = []
        def checkId(value,section_name):
            if value=="NULL":
                if section_name =="assetGroup_activities":
                    return np.random.choice(["875e9ac84698417a856fe956c522e0fc","b11f91e847b246f1a3685833f5475a58"])
                else:
                    file_data = self.utils.read_json_file(assetDiscovery_file)
                    ids = [id['id'] for id in file_data["Subdomains"]["queryAsset"]]
                    return np.random.choice(ids)
            else:
                return value
        def checkrunbook_id(value):
            if value=="NULL":
                return "659d2d1d629b73fbe982a3b3"
            else:
                return value
        def checkrunbook_title(value):
            if value == "NULL":
                return "Domain Discovery"
            else:
                return value
        def runbook_name(value):
            if value=="NULL":
                return ""
            else:
                return value
        
        def runbook_version(value):
            if value=="NULL":
                return "1.0.0"
            else:
                return value
            
        def tenant(value):
            if value=="NULL":
                return "breachlock"
            else:
                return value
            
        def asset_id(value):
            if value=="NULL":
                return "0x2c98"
            else:
                return value
            
        def message(value):
            if value=="NULL":
                return "Databreach is disabled."
            else:
                return value
        def duration(value):
            if value=="NULL":
                return  0.0
            else:
                return value
            
        def depends(value):
            if value=="NULL":
                return []
            else:
                return value
        
        def completion(value):
            if value=="NULL":
                return 0
            else:
                return value
            
        def workflow_name(value):
            if value=="NULL":
                return "system-default-1-0-0-5k3xy3o4"
            else:
                return value
            
        def trigger_now(value):
            if value=="NULL":
                return True
            else:
                return value
            
        def created_at(value):
            if value=="NULL":
                return datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S.%f") + "Z"
            else:
                return datetime.strptime(value, "%d-%m-%YT%H:%M").strftime("%Y-%m-%dT%H:%M:%S")
            
        def created_by (value):
            if value=="NULL":
                return np.random.choice(["saurav","harshit","varun","shivendra"])
            else:
                return value
                
        def checkgql_trigger(value):
            if value=="NULL":
                return "0x866ba"
            else:
                return value
        for idx,value in enumerate(data["Scan Name"]):
            json_data.append({
				"id": checkId(data["Id"][idx],section_name),
				"task_name": value,
				"runbook_id": checkrunbook_id(data["runbook_id"][idx]),
				"runbook_title": checkrunbook_title(data["Type"][idx]),
				"runbook_name": runbook_name(data["runbook_name"][idx]),
				"runbook_version": runbook_version(data["runbook_version"][idx]),
				"tenant": tenant(data["tenant"][idx]),
				"asset": asset_id(data["asset_id"][idx]),
				"asset_name": data["Asset"][idx],
				"domain": asset_id(data["domain_name"][idx]),
				"trigger_source": data["trigger_source"][idx],
				"gql_trigger_ref": checkgql_trigger(data["gql_trigger_ref"][idx]),
				"status": {
					"name": data["Status"][idx],
					"message": message(data["message"][idx]),
					"timestamp": created_at(data["Timestamp"][idx]),
					"duration": duration(data["duration"][idx]),
					"depends": depends(data["depends"][idx]),
					"completion": completion(data["completion"][idx]),
					},
					"workflow_name":workflow_name(data["workflow_name"][idx]),
					"trigger_now": trigger_now(data["trigger_now"][idx]),
					"schedule": data["schedule"][idx],
					"created_at": created_at(data["Created At"][idx]),
					"updated_at": created_at(data["Updated At"][idx]),
					"created_by": created_by(data["Created By"][idx]),
					"updated_by": created_by(data["Updated By"][idx]),
				})
        return {"success":True,"data":{"total":len(json_data),"runbooks_executions":json_data}}

    def initiate_data_ingestion(self,data,sheet_name,section_name):
         try:
            if section_name==domain_section:
                logger.info(":) Data Ingestion For Domain Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(domain_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.domain_data_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            elif section_name==subdomain_section:
                logger.info(":) Data Ingestion For Subdomain Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(subdomain_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.subdomain_data_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            elif section_name==ipaddress_section:
                logger.info(":) Data Ingestion For IpAddress Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(ip_address_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.ip_address_data_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            elif section_name==url_section:
                logger.info(":) Data Ingestion For URL Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(url_data_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.url_data_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name==ipblocks_section:
                logger.info(":) Data Ingestion For IPBlock Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(ip_block_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.ip_block_data_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="ASN":
                logger.info(f":) Data Ingestion For {section_name} Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(asn_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.asn_data(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="domain_vulnerabilities":
                logger.info(f":) Data Ingestion For {section_name} Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(domain_vuln_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.domain_vulnerabilities_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="subdomain_IPAddress":
                logger.info(f":) Data Ingestion For {section_name} Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(subdomain_IPAddress_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.subdomain_ipAddress_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="DNS":
                logger.info(f":) Data Ingestion For {section_name} Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(dns_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.dns_data_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="IPBlockIPAddress":
                logger.info(f":) Data Ingestion For {section_name} Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(ipBlockIpaddress_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.ipblockIpAddress_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="Subdomain_Vulnerabilities":
                logger.info(f":) Data Ingestion For {section_name} Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(subdomain_vulnerabilities_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.subdomain_vulnerabilites_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="assetGroup_vulnerabilities":
                logger.info(f":) Data Ingestion For {section_name} Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(asset_group_vulnerability_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.assetGroupVulnerability(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="assetGroup_Subdomain":
                logger.info(":) Data Ingestion For Subdomain Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(subdomain_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.assetGroupSubdomain(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="assetGroup_IPAddress":
                logger.info(":) Data Ingestion For IpAddress Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(ip_address_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.assetGroupIPAddress(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            elif section_name=="subdomain_ip_activities":
                logger.info(":) Data Ingestion For IpAddress Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(activities_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.subdomain_ip_asset_activities(csv_json,section_name)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            
            elif section_name=="assetGroup_activities":
                logger.info(":) Data Ingestion For IpAddress Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(activities_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.subdomain_ip_asset_activities(csv_json,section_name)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
            else:
                logger.info(":) Data Ingestion For AssetGroups Section Started :)")
                df = self.utils.read_upload_file(data,sheet_name)
                fields = self.utils.required_fields(asset_group_schema)
                df = self.utils.create_missing_field(df,fields)
                csv_json = self.utils.dataframe_json(df)
                upcoming_data = self.asset_group_data_table(csv_json)
                logger.info(":) Data Ingestion Completed :)")
                return upcoming_data
         except Exception as e:
             raise CustomException(e,sys)
         
              
    