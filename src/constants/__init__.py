## JSON SCHEMA  VULNERABILITIES

data_schema = {
        "id": "Id",
        "name": "Name",
        "is_update": "IsUpdate",
        "severity": "Risk",
        "isFalsePositive": "IsFalsePositive",
        "updatedAt": "UpdatedAT",
        "createdAt": "Identified On",
        "pentest": {"id": "pentest_id", "name": "pentest_name","ptId": "ptId"},
        "findingsAggregate": { "count": "Assets Impacted" }
      }

vul_metadata_schema =  {
      'id': 'vulnerablity/id',
      'name': 'vulnerability/name',
      'tags': 'vulnerablity/tags',
      'description': 'vulnerability/description',
      'recommendation': 'vulnerability/recommendation',
      'cvssVector': 'vulnerability/cvssVector',
      'cvssScore': {'baseScore':'cvssScore/baseScore',
                    'impactSubscore':'cvssScore/impactSubscore',
                    'exploitabilitySubscore':'cvssScore/exploitabilitySubscore',
                    'overallScore':'cvssScore/overallScore'},
      'severity': {'key':'severity/key',
                  'name':'severity/name'},
      'updatedAt': 'updatedAt',
      'createdAt': 'createdAt',
      'pentest': {'id': 'vulnerablity/pentest/id', 'name': 'vulnerablity/pentest/name'},
      'findingsAggregate': {'count':'Assets Impacted'},
      'complianceStandards': [{'id': 'vulnerablity/complianceStandards/id',   
                               'name': 'vulnerablity/complianceStandards/name'}],
      'references': {'url':'vulnerability/references/url',
                     'title':'vulnerability/references/title'},
      'vulnerabilityStandards': [{'id': 'vulnerablity/vulnerablityStandards/id',
                                  'name':'vulnerablity/vulnerablityStandards/name'}],
      'findings': [{'id': 'vulnerablity/findings/id',
                    'asset': {'id': 'vulnerablity/findings/asset/id',
                              'name': 'vulnerablity/findings/asset/name'},
                    'ipaddress': {'id':'vulnerablity/ipaddress/id',
                                  'name':'vulnerablity/findings/ipaddress/name'},
                    'url':'vulnerablity/findings/url',
                    'findingPocs': [{'id': 'vulnerablity/findings/findingPocs',
                                     'url':'pocs/url'}]}]
        }



## ASSET DISCOVERY 

domain_schema  = {
    "id": "Id",
    "name": "Name",
    "isAutoAdded": "IsAutoAdded",
    "assetsAggregate": {
        "count": "AssetsAggregate_count",
        },
    "asnsAggregate": {
        "count": "AsnsAggregate_count",
        },
    "vulnerabilitiesAggregate": {
        "count": "VulnerabilitiesAggregate_count",
        },
        }

subdomain_schema = {
    "id": "Id",
    "name": "Subdomains",
    "isAutoAdded": "Asset Label",
    "hasWebsite": "Status",
    "ipaddressesAggregate": { "count": "IpAddressAggregate" },
    "dnsrecordsAggregate": { "count": "DnsrecordsAggregate" },
    "findingsAggregate": { "count": "Vulnerability Count" },
    "updatedAt": "Discovered On",
		}
ip_address_schema = {
    "id": "Id",
    "name": "Name",
    "isAutoAdded": "IsAutoAdded",
    "country": "Country",
    "org": "Organisation",
    "ipblock": {
        "name": "IpblockName",
        },
    "updatedAt": "Discovered On",
    }


url_data_schema = {
      "id": "Id",
      "name": "Endpoints URL",
      "endpointsAggregate": {
          "count": "Total Requests",
          },
      "isAutoAdded": "IsAutoAdded",
      "isReachable": "IsReachable",
      "findingsAggregate": {
          "count": "FindingsAggregate",
	    },
      "updatedAt": "UpdatedAt",
      "domains": [
          {
            "id": "DomainsId",
            "name": "DomainsName",
          },
          ],
      }


ip_block_schema = {
    "id": "Id",
    "name": "Name",
    "isAutoAdded": "IsAutoAdded",
    "asn": {
            "name": "asnName",
		"orgName": "Organisation",
		},
    "ipaddressesAggregate": {
            "count": "IpaddressAggregate",
		},
    "updatedAt": "UpdatedAt",
}

asset_group_schema = {
    "name": "Name",
    "id": "Id",
    "assetType": "AssetType",
    "assetsAggregate": {
        "count": "AssetAggregate",
        },
    "ipaddressesAggregate": {
        "count": "IpAddressAggregate",
        },
   "vulnerabilityCount": "VulnearabilityCount",
   "updatedAt": "UpdatedAt",
   "isArchived": "isArchived",
   "description": "Description",
   "domain": { "id": "DomainId", "name": "DomainName" },
		}

### VARIABLES 

type_of_data = "details"
domain_section = "Domain"
subdomain_section = "Subdomains"
ipaddress_section="IpAddress"
url_section = "URL"
ipblocks_section="IpBlocks"
vulnerabilities_file = "vulnerabilities"
assetDiscovery_file = "assetDiscovery"