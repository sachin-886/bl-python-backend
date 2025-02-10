import os
import json

def get_data(file_name,field_name):
    with open(f"{file_name}.json",'r',encoding="utf-8") as file:
        data = json.load(file)
    return data[field_name]




print(get_data("assets","domainVulnerabilitiesdummy"))


def update_data(file_name,fieldname,new_data):
    with open(f"{file_name}.json",'r',encoding="utf-8") as file:
        data = json.load(file)
    data[fieldname] = new_data
    with open("newfile.json","w") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)
    return "File Dumped"

print("================================================")
print(update_data("assets","VulFindingCountdummy",{
    "getVulnerability": { "findingsAggregate": { "count": 10 } }
  }))
