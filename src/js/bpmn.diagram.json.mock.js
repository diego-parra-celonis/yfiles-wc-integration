const mockedDiagram =
{
    "objectId": "0f8fad5b-d9cb-469f-a165-70867728950e",
    "versionId": "6f9117c6-d281-4cb0-ae56-76ab01ef017a",
    "name": "Create Purchase Requisition (TO-BE)",
    "pools": [
        {
            "id": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
            "label": "Support"
        },
        {
            "id": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Administration"
        },
        {
            "id": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Department"
        }
    ],
    "lanes": [
        {
            "id": "54e19b99-7f77-4204-9460-1be107ee3e3a",
            "poolId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
            "label": ""
        },
        {
            "id": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Planning Department"
        },
        {
            "id": "ad2f075a-dbd4-45ff-96a6-78735a97b8a0",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Administration Contact"
        },
        {
            "id": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": ""
        }
    ],
    "events": [
        {
            "id": "bbba7f8d-0d02-47ca-851b-4f75e374d2ca",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "label": "Start",
            "description": "Start description",
            "type": "evStart",
            "subType": "none",
            "annotations": [
                {
                    "id": "9c13db1d-c7b2-4944-a2b1-bb57b77aff2d",
                    "text": "start annotation"
                }
            ],
            "navigations": [
                {
                    "id": "34733239-bb75-4be8-baba-8d5874e8d369",
                    "label": "Main Process",
                    "facet": "Processes",
                    "objectType": "mainProcess"
                }
            ]
        },
        {
            "id": "bbb74b48-d899-4911-b164-cbfd131ab445",
            "laneId": "54e19b99-7f77-4204-9460-1be107ee3e3a",
            "poolId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
            "label": "Receive Constraint Analysis Request",
            "description": "Receive Constraint Analysis Request description",
            "type": "evIntermediateCatching",
            "subType": "multiple",
            "annotations": [
                {
                    "id": "0e48526c-6d5e-45a6-b909-0e6d9ac0fbc0",
                    "text": "annotation Receive Constraint annotation"
                }
            ]
        },
      {
        "id": "bbb9e8ff-fd80-4143-9479-ea8517f15df8",
        "laneId": "54e19b99-7f77-4204-9460-1be107ee3e3a",
        "poolId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
        "label": "Send Constraint Analysis",
        "description": "Send Constraint Analysis description",
        "type": "evIntermediateThrowing",
        "subType": "message",
        "annotations": [
          {
            "id": "ad9c8910-44ba-4b27-a58a-044739a3d2f7",
            "text": "Send Constraint Analysis annotation"
          }
        ]
      },
        {
            "id": "bbb2b4f7-ca5b-4331-bacf-e25553d874b5",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Receive Request",
            "description": "Receive Request description",
            "type": "evIntermediateCatching",
            "subType": "timer",
            "annotations": [
                {
                    "id": "dd8d0980-cfaa-4ea1-9b66-3b8a49e0d5d6",
                    "text": "Receive Request annotation"
                }
            ]
        },
        {
            "id": "bbb566a4-024c-4056-9d33-a8aac95f7cc0",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Request Constraint Analysis",
            "description": "Request Constraint Analysis description",
            "type": "evIntermediateThrowing",
            "subType": "message"
        },
        {
            "id": "bbb0ec3f-8f79-467d-955f-bbf13e959215",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Receive Constraint Analysis",
            "description": "Receive Constraint Analysis description",
            "type": "evIntermediateCatching",
            "subType": "conditional"
        },
        {
            "id": "bbb37848-e9a6-402b-8cfc-ba5dd8f2b737",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Issue Estimate/ Study",
            "description": "Issue Estimate/ Study description",
            "type": "evIntermediateThrowing",
            "subType": "escalation"
        },
        {
            "id": "bbbf555e-2273-4d1e-a2be-b3390f88e571",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Send Request",
            "description": "Send Request description",
            "type": "evIntermediateThrowing",
            "subType": "compensation"
        },
        {
            "id": "bbbdc95b-7f4c-48ed-a9d0-486d2ddd522c",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Receive Estimate/ Study",
            "description": "Receive Estimate/ Study description",
            "type": "evIntermediateCatching",
            "subType": "message"
        },
        {
            "id": "bbb69971-22ee-4fae-bc31-538d884b1f2a",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Project Stopped",
            "description": "Project Stopped description",
            "type": "evEnd",
            "subType": "cancel"
        },
        {
            "id": "bbb089e0-e356-4f45-825c-bc7300660b29",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "End",
            "description": "End description",
            "type": "evEnd",
            "subType": "terminate",
            "navigations": [
                {
                    "id": "21a1fd1e-9119-42b6-a429-4d9e2eabb867",
                    "label": "Main Process",
                    "facet": "Processes",
                    "objectType": "mainProcess"
                }
            ]
        }
    ],
    "activities": [
        {
            "id": "aaa8473a-9ae5-417d-9667-a9f0363da134",
            "laneId": "54e19b99-7f77-4204-9460-1be107ee3e3a",
            "poolId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
            "label": "Prepare Constraint Analysis",
            "type": "task",
            "subType": "send",
            "taskMarker": "loop",
            "annotations": [
                {
                    "id": "a7c07f2b-6576-46ad-a890-0fb1744029ff",
                    "text": "Prepare Constraint Analysis annotation"
                }
            ],
            "relatedItems": [
                {
                    "id": "67c2faac-eda4-4fc1-8c38-7ade5d69859a",
                    "label": "kpi label 1",
                    "facet": "Kpis",
                    "type": "kpi"
                },
                {
                    "id": "b957b898-3b88-44bf-81d9-bd6c4f62c2f7",
                    "label": "risk label 1",
                    "facet": "risks",
                    "type": "risk"
                }
            ]
        },
        {
            "id": "aaa244b8-d597-4fe6-9a03-f97a2886db1a",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Process Feasibility Study",
            "type": "task",
            "subType": "script",
            "taskMarker": "multiple",
            "relatedItems": [
                {
                    "id": "caaa3c58-457a-4546-b430-0f0436a1dddd",
                    "label": "guideline label 1",
                    "facet": "guidelines",
                    "type": "guideline"
                },
                {
                    "id": "e8380b4b-1fac-423b-b5ee-ba1f4490a872",
                    "label": "requirement label 1",
                    "facet": "requirements",
                    "type": "requirement"
                }
            ]
        },
        {
            "id": "aaa47e28-8da9-43ef-81d7-5fd17bd9ff11",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Process Budget Estimate",
            "type": "task",
            "subType": "service",
            "taskMarker": "sequentialMultiple",
            "relatedItems": [
                {
                    "id": "b9c73e0a-eb9b-4fa8-b5a8-b84ec84126ea",
                    "label": "attachment label 1",
                    "facet": "attachments",
                    "type": "attachment"
                }
            ]
        },
        {
            "id": "aaa22c11-25c4-4c83-bf71-cfc571679935",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Request Budget Estimate/ Feasibility Study",
            "type": "task",
            "subType": "businessRule",
            "taskMarker": "compensation",
            "annotations": [
                {
                    "id": "e060181e-be90-401b-8d38-6ef75cf9e1bc",
                    "text": "Request Budget Estimate/ Feasibility Study annotation"
                }
            ],
            "navigations": [
                {
                    "id": "c3a02987-6ccf-4371-924b-fe95d9a45825",
                    "label": "test nav on Task",
                    "facet": "Processes",
                    "objectType": "mainProcess"
                }
            ]
        },
        {
            "id": "aaad41f6-af8f-4e80-9bcf-29b55ad61178",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Analyse Budget Estimate/ Feasibility Study",
            "type": "task",
            "subType": "manual",
            "taskMarker": "compensationLoop"
        },
        {
            "id": "aaa83286-6bd9-4831-8fca-62ab5b8540ba",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Abandon Project",
            "type": "task",
            "subType": "user",
            "taskMarker": "adhoc"
        },
        {
            "id": "aaa6ac80-8881-4a43-aa6a-07ffbe1f8779",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Provide Information",
            "description": "Provide additional information",
            "type": "task",
            "subType": "receive",
            "annotations": [
                {
                    "id": "4a80cc19-612c-4b64-a055-99d47d95a5fb",
                    "text": "Request needs additional Info"
                }
            ]
        },
        {
            "id": "aaa61885-badf-40eb-af3f-a6b2ba6c4962",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Obtain Planning Permission",
            "type": "task",
            "subType": "receiveAndInstantiate"
        }
    ],
    "gateways": [
        {
            "id": "ccc42c94-37c2-4dfc-ae5c-3c4950b71fa4",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Valid request?",
            "type": "ruleXor",
            "annotations": [
                {
                    "id": "96a4abb5-621c-4652-93de-7e7cd37542f2",
                    "text": "Valid request annotation"
                },
                {
                    "id": "a401dd9e-6c60-482f-9ee5-f0d46498b818",
                    "text": "Valid request annotation 2"
                }
            ]
        },
        {
            "id": "ccc2a9d2-848c-44be-bce2-43d45d1487b5",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "label": "Type of Study",
            "type": "ruleOr",
            "annotations": [
                {
                    "id": "eb69b52b-b713-466b-b569-66bf5010c391",
                    "text": "Type of Study annotation"
                }
            ]
        },
        {
            "id": "ccc42107-f574-4499-808b-6c29156d6c28",
            "laneId": "439d5881-e76d-4c5d-b590-505d59033ab2",
            "poolId": "8e2b315d-4d0c-44ff-8922-add52751abc3",
            "type": "ruleAnd"
        },
        {
            "id": "ccc393b2-f654-4918-83d5-f79be74f6b64",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Budget Estimate/ Feasibility Study",
            "type": "ruleXor",
            "annotations": [
                {
                    "id": "6ac9a03f-c307-47ab-9994-fb855fef1c90",
                    "text": "Budget Estimate/ Feasibility Study annotation"
                }
            ]
        },
        {
            "id": "cccbc4e0-7558-4c92-bbd0-7bd18f33a0c9",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Continue?",
            "type": "ruleXor",
            "annotations": [
                {
                    "id": "749e9e85-d8ac-4650-ac63-0d9a5a52c563",
                    "text": "Continue? annotation"
                }
            ]
        },
        {
            "id": "ccc92726-c986-4f17-ae1a-7a09bf1fb34e",
            "laneId": "fb09a334-083f-44ab-a400-3ce1f2b896af",
            "poolId": "37a36420-53d4-49bd-ac5e-b4be6ee65534",
            "label": "Decide for Project",
            "type": "ruleXor",
            "annotations": [
                {
                    "id": "1d4c6cda-88aa-406b-a73f-1cdcedce22fb",
                    "text": "Decide for Project annotation"
                }
            ]
        }
    ],
    "edges": [
        {
            "id": "bc34c410-b8ce-4724-9529-5ad06e1b973b",
            "type": "sequenceFlow",
            "sourceId": "bbba7f8d-0d02-47ca-851b-4f75e374d2ca",
            "targetId": "ccc393b2-f654-4918-83d5-f79be74f6b64"
        },
        {
            "id": "1557c5ba-afdf-444a-98e8-7b5b11ad3cbe",
            "label": "Yes",
            "type": "sequenceFlow",
            "sourceId": "ccc393b2-f654-4918-83d5-f79be74f6b64",
            "targetId": "aaa22c11-25c4-4c83-bf71-cfc571679935"
        },
        {
            "id": "8644d731-c045-45b2-b1c6-2f029adf9113",
            "label": "No",
            "type": "sequenceFlow",
            "sourceId": "ccc393b2-f654-4918-83d5-f79be74f6b64",
            "targetId": "aaa61885-badf-40eb-af3f-a6b2ba6c4962"
        },
        {
            "id": "188ade0d-21e5-44ca-849f-588ddad19b02",
            "type": "sequenceFlow",
            "sourceId": "aaa22c11-25c4-4c83-bf71-cfc571679935",
            "targetId": "bbbf555e-2273-4d1e-a2be-b3390f88e571"
        },
        {
            "id": "79875d1b-066e-411f-a095-74c6c298c71b",
            "type": "messageFlow",
            "sourceId": "bbbf555e-2273-4d1e-a2be-b3390f88e571",
            "targetId": "bbb2b4f7-ca5b-4331-bacf-e25553d874b5",
            "messageFlowType": "Initiating"
        },
        {
            "id": "57c6a245-87b6-41c9-988d-2ae6c95c5040",
            "type": "sequenceFlow",
            "sourceId": "bbb2b4f7-ca5b-4331-bacf-e25553d874b5",
            "targetId": "ccc42c94-37c2-4dfc-ae5c-3c4950b71fa4"
        },
        {
            "id": "3ef65fbb-cb7f-4cab-8438-4cfdd6671711",
            "type": "sequenceFlow",
            "sourceId": "ccc42c94-37c2-4dfc-ae5c-3c4950b71fa4",
            "targetId": "ccc2a9d2-848c-44be-bce2-43d45d1487b5"
        },
        {
            "id": "09af7814-6f3d-49bd-8514-eaf52c9e616b",
            "label": "Feasibility Study",
            "type": "sequenceFlow",
            "sourceId": "ccc2a9d2-848c-44be-bce2-43d45d1487b5",
            "targetId": "bbb566a4-024c-4056-9d33-a8aac95f7cc0"
        },
        {
            "id": "2c335def-d1cf-4e33-9bcf-12120e31bc9c",
            "label": "Budget Estimate",
            "type": "sequenceFlow",
            "sourceId": "ccc2a9d2-848c-44be-bce2-43d45d1487b5",
            "targetId": "aaa47e28-8da9-43ef-81d7-5fd17bd9ff11"
        },
        {
            "id": "57069f2e-1e80-4d12-ade8-82c41b573061",
            "type": "messageFlow",
            "sourceId": "bbb566a4-024c-4056-9d33-a8aac95f7cc0",
            "targetId": "bbb74b48-d899-4911-b164-cbfd131ab445"
        },
        {
            "id": "44b945ba-c328-4af9-bd36-3deca7a28e1b",
            "type": "sequenceFlow",
            "sourceId": "bbb74b48-d899-4911-b164-cbfd131ab445",
            "targetId": "aaa8473a-9ae5-417d-9667-a9f0363da134"
        },
        {
            "id": "59bf10c6-1eca-4ee9-b7ae-40b0309d52aa",
            "type": "sequenceFlow",
            "sourceId": "aaa8473a-9ae5-417d-9667-a9f0363da134",
            "targetId": "bbb9e8ff-fd80-4143-9479-ea8517f15df8"
        },
        {
            "id": "66984f8b-c499-4a73-9d87-f1bb210b8345",
            "type": "messageFlow",
            "sourceId": "bbb9e8ff-fd80-4143-9479-ea8517f15df8",
            "targetId": "bbb0ec3f-8f79-467d-955f-bbf13e959215",
            "messageFlowType": "NonInitiating"
        },
        {
            "id": "d0d583b4-3137-47ad-8c7c-f77fa3ca4a57",
            "type": "sequenceFlow",
            "sourceId": "bbb0ec3f-8f79-467d-955f-bbf13e959215",
            "targetId": "aaa244b8-d597-4fe6-9a03-f97a2886db1a"
        },
        {
            "id": "10fb432b-3521-4d3c-9bf8-bdf93b147126",
            "type": "sequenceFlow",
            "sourceId": "aaa244b8-d597-4fe6-9a03-f97a2886db1a",
            "targetId": "ccc42107-f574-4499-808b-6c29156d6c28"
        },
        {
            "id": "cd95dd23-3c9f-439b-af8a-e0c37863c801",
            "type": "sequenceFlow",
            "sourceId": "aaa47e28-8da9-43ef-81d7-5fd17bd9ff11",
            "targetId": "ccc42107-f574-4499-808b-6c29156d6c28"
        },
        {
            "id": "5d7a8e94-fb13-41fe-aa32-2d08d3b879f5",
            "type": "sequenceFlow",
            "sourceId": "ccc42107-f574-4499-808b-6c29156d6c28",
            "targetId": "bbb37848-e9a6-402b-8cfc-ba5dd8f2b737"
        },
        {
            "id": "c8b6415b-7259-437f-865b-89e396d2e16b",
            "type": "messageFlow",
            "sourceId": "bbb37848-e9a6-402b-8cfc-ba5dd8f2b737",
            "targetId": "bbbdc95b-7f4c-48ed-a9d0-486d2ddd522c",
            "messageFlowType": "None"
        },
        {
            "id": "bdfb72d7-a3ea-4192-9b24-633cb1db4bd5",
            "type": "sequenceFlow",
            "sourceId": "bbbdc95b-7f4c-48ed-a9d0-486d2ddd522c",
            "targetId": "aaad41f6-af8f-4e80-9bcf-29b55ad61178"
        },
        {
            "id": "4707375d-15b5-4456-ae43-00ff44c8264f",
            "label": "No",
            "type": "sequenceFlow",
            "sourceId": "ccc92726-c986-4f17-ae1a-7a09bf1fb34e",
            "targetId": "aaa83286-6bd9-4831-8fca-62ab5b8540ba"
        },
        {
            "id": "cc94d205-5b9a-458f-b875-e7b3262c4c06",
            "type": "sequenceFlow",
            "sourceId": "aaa83286-6bd9-4831-8fca-62ab5b8540ba",
            "targetId": "bbb69971-22ee-4fae-bc31-538d884b1f2a"
        },
        {
            "id": "768f0e8d-ff47-4e03-a67e-418a3d31c09f",
            "label": "Yes",
            "type": "sequenceFlow",
            "sourceId": "ccc92726-c986-4f17-ae1a-7a09bf1fb34e",
            "targetId": "aaa61885-badf-40eb-af3f-a6b2ba6c4962"
        },
        {
            "id": "0aba705c-d0f0-4d9b-827b-0fb91c7edf09",
            "type": "sequenceFlow",
            "sourceId": "aaa61885-badf-40eb-af3f-a6b2ba6c4962",
            "targetId": "bbb089e0-e356-4f45-825c-bc7300660b29"
        },
        {
            "id": "df9a501f-75dd-4296-b461-8f29c85cb5f7",
            "label": "Not Valid",
            "type": "messageFlow",
            "sourceId": "ccc42c94-37c2-4dfc-ae5c-3c4950b71fa4",
            "targetId": "aaa6ac80-8881-4a43-aa6a-07ffbe1f8779",
            "messageFlowType": "NonInitiating"
        },
        {
            "id": "d5c55b38-735d-4349-9d4d-ea279b21f53d",
            "type": "sequenceFlow",
            "sourceId": "aaa6ac80-8881-4a43-aa6a-07ffbe1f8779",
            "targetId": "cccbc4e0-7558-4c92-bbd0-7bd18f33a0c9"
        },
        {
            "id": "ff950544-fe19-41cd-83af-d9b00fa6f4de",
            "label": "Yes",
            "type": "sequenceFlow",
            "sourceId": "cccbc4e0-7558-4c92-bbd0-7bd18f33a0c9",
            "targetId": "bbbf555e-2273-4d1e-a2be-b3390f88e571"
        },
        {
            "id": "c92a49be-e3b5-4036-ab3c-730d4030e8e2",
            "label": "No",
            "type": "sequenceFlow",
            "sourceId": "cccbc4e0-7558-4c92-bbd0-7bd18f33a0c9",
            "targetId": "bbb69971-22ee-4fae-bc31-538d884b1f2a"
        },
        {
            "id": "8641ef79-e1c5-49bc-b787-5ac2c551f823",
            "type": "sequenceFlow",
            "sourceId": "aaad41f6-af8f-4e80-9bcf-29b55ad61178",
            "targetId": "ccc92726-c986-4f17-ae1a-7a09bf1fb34e"
        }
    ]
};

export const mockedCelonisProcessDiagram = JSON.stringify(mockedDiagram);