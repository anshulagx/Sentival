import requests
import json

from hatesonar import Sonar


def hateClassifier(str):
    response = requests.post("http://127.0.0.1:5000/api/analyze",
    headers={"Content-Type": "application/json"},
                            json={"text": str}
                            )
    print(response.json())





def genderBiasClassifier(str):

    response = requests.post("http://localhost:5001/check",
                            headers={"Content-Type": "application/json"},
                            json={"text": str}
                            )

    result=response.json()
    print(result)
    issues=result["issues"]

    for data in issues:

        name=data["name"]
        flags=data["flags"]

        if name=="Effort vs Accomplishment":
            print(flags)

        if name=="\nTerms biased towards women":
            print(flags)
        if name=="Terms biased towards men:":
            print(flags)


    return ""




text=str("I am writing to recommend NAME for the position of lab manager. As is required for this position, she is diligent, hardworking, and meticulous. She is willing and able to learn new things quickly. While she is pleasant and considerate, she is also willing to act firmly to enforce necessary procedures for research with human subjects. She will not be afraid to challenge any hint of cutting corners.")

hateClassifier(text)

genderBiasClassifier(text)
