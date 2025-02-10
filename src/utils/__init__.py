import json 
import os
import re
import pandas as pd
from collections import defaultdict

def processed_csv(df):
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

def json_schema():
    return {
    'id': 'vulnerablity/id',
    'name': 'vulnerability/name',
    'tags': 'vulnerablity/tags',
    'description': 'vulnerability/description',
    'recommendation':'vulnerability/recommendation' ,
    'cvssVector': 'vulnerability/cvssVector' ,
    'cwe':'vulnerability/cwe',
    'cvsScore':{'baseScore':'cvssScore/baseScore',
                'impactSubscore':'cvssScore/impactSubscore',
                'exploitabilitySubscore':'cvssScore/exploitabilitySubscore',
                'overallScore':'cvssScore/overallScore'},
    'severity': {'key':'severity/key',
                'name':'severity/name'},
    'updatedAt': 'updatedAt',
    'createdAt': 'createdAt',
    'pentest': {'id': 'vulnerablity/pentest/id',
    'name': 'vulnerability/name',
    'ptId': 'pentest/Id'},
    'cateogry': 'vulnerability/category/name',
    'findings': [{'id': 'vulnerablity/findings/id',
      'executionId': 'vulnerablity/findings/executionId',
      'findingType': 'vulnerablity/findings/findingType',
      'wfName': 'vulnerablity/findings/pentest/wfName',
      'asset': {'id': 'vulnerablity/findings/asset/id',
                'name': 'vulnerablity/findings/asset/name'},
      'ipaddress': 'vulnerablity/findings/ipaddress/name',
      'url': 'vulnerablity/findings/url',
      'findingPocs': [{'id': 'vulnerablity/findings/findingPocs','url':'pocs/url'}]}],
    "details":{
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
        'pentest': {'id': 'vulnerablity/pentest/id', 'name': 'vulnerability/name'},
        'complianceStandards': [{'id': 'vulnerablity/complianceStandards/id',
            'name': 'vulnerablity/complianceStandards/name'}],
            'references': {'url':'vulnerability/references/url',
                          'title':'vulnerability/references/title'},
            'vulnerabilityStandards': [{'id': 'vulnerablity/vulnerablityStandards/id', 'name':'vulnerablity/vulnerablityStandards/name'}],
            'findings': [{'id': 'vulnerablity/findings/id',
              'asset': {'id': 'vulnerablity/findings/asset/id',
                        'name': 'vulnerablity/findings/asset/name'},
              'ipaddress': {'id':'vulnerablity/ipaddress/id','name':'vulnerablity/findings/ipaddress/name'},
              'url':'vulnerablity/findings/url',
              'findingPocs': [{'id': 'vulnerablity/findings/findingPocs','url':'pocs/url'}]}]
            }
    }


def create_missing_field(df,expected_field):
  excel_field = df.columns
  for field in expected_field:
    if field not in excel_field:
      df[field] = 'NULL'
  return df

def extract_unique_values_form_schema(data, values_set=None):
    if values_set is None:
        values_set = set()
    
    if isinstance(data, dict):
        for value in data.values():
            extract_unique_values_form_schema(value, values_set)
    elif isinstance(data, list):
        for item in data:
            extract_unique_values_form_schema(item, values_set)
    else:
        values_set.add(data)
    
    return sorted(values_set)


def extracting_data(df):
   data = {}
   for column in list(df.columns):
    data[column] = list(df[column])
   return data

def add_data_to_json(pentest_data,data):
  for idx,value in enumerate(data['vulnerability/name']):
    pentest_data["pentestVulnerabilityData"]["queryPentestVulnerability"].append({
      'id': data['vulnerablity/id'][idx],
      'name': data['vulnerability/name'][idx],
      'tags': data['vulnerablity/tags'][idx],
      'description': data['vulnerability/description'][idx],
      'recommendation':data['vulnerability/recommendation'][idx] ,
      'cvssVector': data['vulnerability/cvssVector'][idx] ,
      'cwe': data['vulnerability/cwe'][idx],
      'cvsScore':{'baseScore':data['cvssScore/baseScore'][idx],
                  'impactSubscore':data['cvssScore/impactSubscore'][idx],
                  'exploitabilitySubscore':data['cvssScore/exploitabilitySubscore'][idx],
                  'overallScore':data['cvssScore/overallScore'][idx]},
      'severity': {'key':data['severity/key'][idx],
                  'name':data['severity/name'][idx]},
      'updatedAt': data['updatedAt'][idx],
      'createdAt': data['createdAt'][idx],
      'pentest': {'id': data['vulnerablity/pentest/id'][idx],
      'name': data['vulnerability/name'][idx],
      'ptId': data['pentest/Id'][idx]},
      'cateogry': data['vulnerability/category/name'][idx],
      'findings': [{'id': data['vulnerablity/findings/id'][idx],
        'executionId': data['vulnerablity/findings/executionId'][idx],
        'findingType': data['vulnerablity/findings/findingType'][idx],
        'wfName': data['vulnerablity/findings/pentest/wfName'][idx],
        'asset': {'id': data['vulnerablity/findings/asset/id'][idx],
                  'name': data['vulnerablity/findings/asset/name'][idx]},
        'ipaddress': data['vulnerablity/findings/ipaddress/name'][idx],
        'url': data['vulnerablity/findings/url'][idx],
        'findingPocs': [{'id': data['vulnerablity/findings/findingPocs'][idx],'url':data['pocs/url'][idx]}]}],
      'findingsAggregate': {'count': 1},
      "details":{
          'id': data['vulnerablity/id'][idx],
          'name': data['vulnerability/name'][idx],
          'tags': data['vulnerablity/tags'][idx],
          'description': data['vulnerability/description'][idx],
          'recommendation': data['vulnerability/recommendation'][idx],
          'cvssVector': data['vulnerability/cvssVector'][idx],
          'cvssScore': {'baseScore':data['cvssScore/baseScore'][idx],
                        'impactSubscore':data['cvssScore/impactSubscore'][idx],
                        'exploitabilitySubscore':data['cvssScore/exploitabilitySubscore'][idx],
                        'overallScore':data['cvssScore/overallScore'][idx]},
          'severity': {'key':data['severity/key'][idx],
                        'name':data['severity/name'][idx]},
          'updatedAt': data['updatedAt'][idx],
          'createdAt': data['createdAt'][idx],
          'pentest': {'id': data['vulnerablity/pentest/id'][idx], 'name': data['vulnerability/name'][idx],},
          'findingsAggregate': {'count': 1},
          'complianceStandards': [{'id': data['vulnerablity/complianceStandards/id'][idx],
              'name': data['vulnerablity/complianceStandards/name'][idx]}],
              'references': {'url':data['vulnerability/references/url'][idx],
                            'title':data['vulnerability/references/title'][idx]},
              'vulnerabilityStandards': [{'id': data['vulnerablity/vulnerablityStandards/id'][idx], 'name': data['vulnerablity/vulnerablityStandards/name'][idx]}],
              'findings': [{'id': data['vulnerablity/findings/id'][idx],
                'asset': {'id': data['vulnerablity/findings/asset/id'][idx],
                          'name': data['vulnerablity/findings/asset/name'][idx]},
                'ipaddress': {'id':data['vulnerablity/ipaddress/id'][idx],'name':data['vulnerablity/findings/ipaddress/name'][idx]},
                'url': data['vulnerablity/findings/url'][idx],
                'findingPocs': [{'id': data['vulnerablity/findings/findingPocs'][idx],'url':data['pocs/url'][idx]}]}]
              }
      })
  return pentest_data



def read_file(file_name):
    with open(f"{file_name}.json",'r',encoding="utf-8") as file:
        data = json.load(file)
    return data

def write_json(file_name,data):
    with open(f"{file_name}.json","w") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)