// const mySchema1 = {
   
//     "$ref": "#/definitions/Welcome10",
//     "definitions": {
//         "Welcome10": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "Product_Config_Hdr": {
//                     "$ref": "#/definitions/ProductConfigHdr"
//                 },
//                 "Product_Config_Body": {
//                     "$ref": "#/definitions/ProductConfigBody"
//                 }
//             },
//             "required": [
//                 "Product_Config_Body",
//                 "Product_Config_Hdr"
//             ],
//             "title": "Welcome10"
//         },
//         "ProductConfigBody": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "Config _sections": {
//                     "type": "array",
//                     "items": {
//                         "$ref": "#/definitions/ConfigSection"
//                     }
//                 }
//             },
//             "required": [
//                 "Config _sections"
//             ],
//             "title": "ProductConfigBody"
//         },
//         "ConfigSection": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "Section_Id": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "Hardware_Templates": {
//                     "type": "array",
//                     "items": {
//                         "type": "string"
//                     }
//                 },
//                 "Config_Attributes": {
//                     "$ref": "#/definitions/ConfigAttributes"
//                 },
//                 "LRU_Config": {
//                     "type": "array",
//                     "items": {
//                         "$ref": "#/definitions/LRUConfig"
//                     }
//                 }
//             },
//             "required": [
//                 "Config_Attributes",
//                 "Hardware_Templates",
//                 "LRU_Config",
//                 "Section_Id"
//             ],
//             "title": "ConfigSection"
//         },
//         "ConfigAttributes": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "LC_SHOW_ONLY_SW": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "LMS_CSL_SUPPORT_ON": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "DATA_CONCURRENT_TRANSFERS": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "DATA_CONCURRENT_INSTALLS": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "LOADER_NETMONITOR_DEV": {
//                     "type": "string"
//                 },
//                 "LMS_KIT_MAX_VERSIONS_MEDIA": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "LMS_KIT_MAX_VERSIONS_CONTENT": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "MEDIA_DISPATCH_TIMEOUT": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "LMS_NET_INTERFACE": {
//                     "type": "string"
//                 },
//                 "SDP_NET_INTERFACE": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "DATA_CONCURRENT_INSTALLS",
//                 "DATA_CONCURRENT_TRANSFERS",
//                 "LC_SHOW_ONLY_SW",
//                 "LMS_CSL_SUPPORT_ON",
//                 "LMS_KIT_MAX_VERSIONS_CONTENT",
//                 "LMS_KIT_MAX_VERSIONS_MEDIA",
//                 "LOADER_NETMONITOR_DEV",
//                 "MEDIA_DISPATCH_TIMEOUT"
//             ],
//             "title": "ConfigAttributes"
//         },
//         "LRUConfig": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "LRU": {
//                     "type": "string"
//                 },
//                 "LRU_Config_Attributes": {
//                     "$ref": "#/definitions/LRUConfigAttributes"
//                 }
//             },
//             "required": [
//                 "LRU",
//                 "LRU_Config_Attributes"
//             ],
//             "title": "LRUConfig"
//         },
//         "LRUConfigAttributes": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "LMS_NET_INTERFACE": {
//                     "type": "string"
//                 },
//                 "SDP_NET_INTERFACE": {
//                     "type": "string"
//                 }
//             },
//             "required": [],
//             "title": "LRUConfigAttributes"
//         },
//         "ProductConfigHdr": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "id": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "name": {
//                     "type": "string"
//                 },
//                 "version": {
//                     "type": "string"
//                 },
//                 "generated-by": {
//                     "type": "string"
//                 },
//                 "generated-timestamp": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "generated-by",
//                 "generated-timestamp",
//                 "id",
//                 "name",
//                 "version"
//             ],
//             "title": "ProductConfigHdr"
//         }
//     }
// };
// const json1 =
// {
//     "Product_Config_Hdr": {
//         "id": "12345",
//         "name": "LMS",
//         "version": "2.0",
//         "generated-by": "Admin",
//         "generated-timestamp": "09 Mar 2021 21:55:57"
//     },
//     "Product_Config_Body": {
//         "Config_sections": [
//             {
//                 "Section_Id": "1",
//                 "Hardware_Templates": [
//                     "T-FS_1-AI_1-1"
//                 ],
//                 "Config_Attributes": {
//                     "LC_SHOW_ONLY_SW": "1",
//                     "LMS_CSL_SUPPORT_ON": "0",
//                     "DATA_CONCURRENT_TRANSFERS": "2",
//                     "DATA_CONCURRENT_INSTALLS": "2",
//                     "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//                     "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//                     "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//                     "MEDIA_DISPATCH_TIMEOUT": "20"
//                 },
//                 "LRU_Config": [
//                     {
//                         "LRU": "FS_1",
//                         "LRU_Config_Attributes": {
//                             "LMS_NET_INTERFACE": "bond0",
//                             "SDP_NET_INTERFACE": "bond0"
//                         }
//                     },
//                     {
//                         "LRU": "AI_1",
//                         "LRU_Config_Attributes": {
//                             "LMS_NET_INTERFACE": "eth1",
//                             "SDP_NET_INTERFACE": "eth1"
//                         }
//                     }
//                 ]
//             },
//             {
//                 "Section_Id": "2",
//                 "Hardware_Templates": [
//                     "T-FS_1-AI_1-FS_9-1"
//                 ],
//                 "Config_Attributes": {
//                     "LC_SHOW_ONLY_SW": "1",
//                     "LMS_NET_INTERFACE": "bond0",
//                     "SDP_NET_INTERFACE": "bond0",
//                     "LMS_CSL_SUPPORT_ON": "0",
//                     "DATA_CONCURRENT_TRANSFERS": "2",
//                     "DATA_CONCURRENT_INSTALLS": "2",
//                     "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//                     "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//                     "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//                     "MEDIA_DISPATCH_TIMEOUT": "20"
//                 },
//                 "LRU_Config": [
//                     {
//                         "LRU": "FS_1",
//                         "LRU_Config_Attributes": {}
//                     },
//                     {
//                         "LRU": "AI_1",
//                         "LRU_Config_Attributes": {}
//                     },
//                     {
//                         "LRU": "FS_9",
//                         "LRU_Config_Attributes": {}
//                     }
//                 ]
//             },
//             {
//                 "Section_Id": "3",
//                 "Hardware_Templates": [
//                     "T-AI_1-FS_9-1"
//                 ],
//                 "Config_Attributes": {
//                     "LC_SHOW_ONLY_SW": "1",
//                     "LMS_NET_INTERFACE": "bond0",
//                     "SDP_NET_INTERFACE": "bond0",
//                     "LMS_CSL_SUPPORT_ON": "0",
//                     "DATA_CONCURRENT_TRANSFERS": "2",
//                     "DATA_CONCURRENT_INSTALLS": "2",
//                     "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//                     "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//                     "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//                     "MEDIA_DISPATCH_TIMEOUT": "20"
//                 },
//                 "LRU_Config": [
//                     {
//                         "LRU": "AI_1",
//                         "LRU_Config_Attributes": {}
//                     },
//                     {
//                         "LRU": "FS_9",
//                         "LRU_Config_Attributes": {}
//                     }
//                 ]
//             }
//         ]
//     }
// };
// const mySchema2 = {

//     "$ref": "#/definitions/Marketplace",
//     "definitions": {
//         "Marketplace": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "Product_Config_Hdr": {
//                     "$ref": "#/definitions/ProductConfigHdr"
//                 },
//                 "Product_Config_Body": {
//                     "$ref": "#/definitions/ProductConfigBody"
//                 }
//             },
//             "required": [
//                 "Product_Config_Body",
//                 "Product_Config_Hdr"
//             ],
//             "title": "MARKETPLACE"
//         },
//         "ProductConfigBody": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "catalog_shopping_app": {
//                     "type": "string"
//                 },
//                 "catalog_shopping_inventory": {
//                     "type": "string"
//                 },
//                 "catalog_shop_inventory_offload_max_files": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "catalog_shop_order_offload_max_files": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "catalog_shopping_payment_support": {
//                     "type": "string"
//                 },
//                 "catalog_hospitality_app": {
//                     "type": "string"
//                 },
//                 "catalog_hospitality_inventory": {
//                     "type": "string"
//                 },
//                 "catalog_hosp_inventory_offload_max_files": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "catalog_hosp_order_offload_max_files": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "catalog_hospitality_payment_support": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "catalog_hosp_inventory_offload_max_files",
//                 "catalog_hosp_order_offload_max_files",
//                 "catalog_hospitality_app",
//                 "catalog_hospitality_inventory",
//                 "catalog_hospitality_payment_support",
//                 "catalog_shop_inventory_offload_max_files",
//                 "catalog_shop_order_offload_max_files",
//                 "catalog_shopping_app",
//                 "catalog_shopping_inventory",
//                 "catalog_shopping_payment_support"
//             ],
//             "title": "ProductConfigBody"
//         },
//         "ProductConfigHdr": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "id": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "name": {
//                     "type": "string"
//                 },
//                 "version": {
//                     "type": "string"
//                 },
//                 "generated-by": {
//                     "type": "string"
//                 },
//                 "generated-timestamp": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "generated-by",
//                 "generated-timestamp",
//                 "id",
//                 "name",
//                 "version"
//             ],
//             "title": "ProductConfigHdr"
//         }
//     }
// }


// const json2 = {
//     "Product_Config_Hdr": {
//         "id": "256",
//         "name": "Marketplace Catalog",
//         "version": "2.5",
//         "generated-by": "Admin",
//         "generated-timestamp": "11 Mar 2021 21:55:57"
//     },
//     "Product_Config_Body": {
//         "catalog_shopping_app": "on",
//         "catalog_shopping_inventory": "on",
//         "catalog_shop_inventory_offload_max_files": "10",
//         "catalog_shop_order_offload_max_files": "50",
//         "catalog_shopping_payment_support": "on",
//         "catalog_hospitality_app": "off",
//         "catalog_hospitality_inventory": "off",
//         "catalog_hosp_inventory_offload_max_files": "10",
//         "catalog_hosp_order_offload_max_files": "50",
//         "catalog_hospitality_payment_support": "off"
//     }
// }

// const mySchema3 =
// {
//     "type": "object",
//     "additionalProperties": false,
//     "properties": {
//         "ProductConfigHdr": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "id": {
//                     "type": "string",
//                     "format": "integer"
//                 },
//                 "name": {
//                     "type": "string"
//                 },
//                 "version": {
//                     "type": "string"
//                 },
//                 "generated-by": {
//                     "type": "string"
//                 },
//                 "generated-timestamp": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "generated-by",
//                 "generated-timestamp",
//                 "id",
//                 "name",
//                 "version"
//             ],
//             "title": "ProductConfigHdr"
//         },
//         "ProductConfigBody": {
//             "type": "object",
//             "additionalProperties": false,
//             "properties": {
//                 "Config _sections": {
//                     "type": "array",
//                     "items": {
//                         "type": "object",
//                         "additionalProperties": false,
//                         "properties": {
//                             "Section_Id": {
//                                 "type": "string",
//                                 "format": "integer"
//                             },
//                             "Hardware_Templates": {
//                                 "type": "array",
//                                 "items": {
//                                     "type": "string"
//                                 }
//                             },
//                             "Config_Attributes": {
//                                 "type": "object",
//                                 "additionalProperties": false,
//                                 "properties": {
//                                     "LC_SHOW_ONLY_SW": {
//                                         "type": "string",
//                                         "format": "integer"
//                                     },
//                                     "LMS_CSL_SUPPORT_ON": {
//                                         "type": "string",
//                                         "format": "integer"
//                                     },
//                                     "DATA_CONCURRENT_TRANSFERS": {
//                                         "type": "string",
//                                         "format": "integer"
//                                     },
//                                     "DATA_CONCURRENT_INSTALLS": {
//                                         "type": "string",
//                                         "format": "integer"
//                                     },
//                                     "LOADER_NETMONITOR_DEV": {
//                                         "type": "string"
//                                     },
//                                     "LMS_KIT_MAX_VERSIONS_MEDIA": {
//                                         "type": "string",
//                                         "format": "integer"
//                                     },
//                                     "LMS_KIT_MAX_VERSIONS_CONTENT": {
//                                         "type": "string",
//                                         "format": "integer"
//                                     },
//                                     "MEDIA_DISPATCH_TIMEOUT": {
//                                         "type": "string",
//                                         "format": "integer"
//                                     },
//                                     "LMS_NET_INTERFACE": {
//                                         "type": "string"
//                                     },
//                                     "SDP_NET_INTERFACE": {
//                                         "type": "string"
//                                     }
//                                 },
//                                 "required": [
//                                     "DATA_CONCURRENT_INSTALLS",
//                                     "DATA_CONCURRENT_TRANSFERS",
//                                     "LC_SHOW_ONLY_SW",
//                                     "LMS_CSL_SUPPORT_ON",
//                                     "LMS_KIT_MAX_VERSIONS_CONTENT",
//                                     "LMS_KIT_MAX_VERSIONS_MEDIA",
//                                     "LOADER_NETMONITOR_DEV",
//                                     "MEDIA_DISPATCH_TIMEOUT"
//                                 ],
//                                 "title": "ConfigAttributes"
//                             },
//                             "LRU_Config": {
//                                 "type": "array",
//                                 "items": {
//                                     "type": "object",
//                                     "additionalProperties": false,
//                                     "properties": {
//                                         "LRU": {
//                                             "type": "string"
//                                         },
//                                         "LRU_Config_Attributes": {
//                                             "type": "object",
//                                             "additionalProperties": false,
//                                             "properties": {
//                                                 "LMS_NET_INTERFACE": {
//                                                     "type": "string"
//                                                 },
//                                                 "SDP_NET_INTERFACE": {
//                                                     "type": "string"
//                                                 }
//                                             },
//                                             "required": [],
//                                             "title": "LRUConfigAttributes"
//                                         }
//                                     },
//                                     "required": [
//                                         "LRU",
//                                         "LRU_Config_Attributes"
//                                     ],
//                                     "title": "LRUConfig"
//                                 }
//                             }
//                         },
//                         "required": [
//                             "Config_Attributes",
//                             "Hardware_Templates",
//                             "LRU_Config",
//                             "Section_Id"
//                         ],
//                         "title": "ConfigSection"
//                     }
//                 }
//             },
//             "required": [
//                 "Config _sections"
//             ],
//             "title": "ProductConfigBody"
//         }
//     },
//     "required": [
//         "Product_Config_Body",
//         "Product_Config_Hdr"
//     ],
//     "title": "LMS"
// }


// const json3 = {
//     "Product_Config_Hdr": {
//         "id": "12345",
//         "name": "LMS",
//         "version": "2.0",
//         "generated-by": "Admin",
//         "generated-timestamp": "09 Mar 2021 21:55:57"
//     },
//     "Product_Config_Body": {
//         "Config _sections": [
//             {
//                 "Section_Id": "1",
//                 "Hardware_Templates": [
//                     "T-FS_1-AI_1-1"
//                 ],
//                 "Config_Attributes": {
//                     "LC_SHOW_ONLY_SW": "1",
//                     "LMS_CSL_SUPPORT_ON": "0",
//                     "DATA_CONCURRENT_TRANSFERS": "2",
//                     "DATA_CONCURRENT_INSTALLS": "2",
//                     "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//                     "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//                     "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//                     "MEDIA_DISPATCH_TIMEOUT": "20"
//                 },
//                 "LRU_Config": [
//                     {
//                         "LRU": "FS_1",
//                         "LRU_Config_Attributes": {
//                             "LMS_NET_INTERFACE": "bond0",
//                             "SDP_NET_INTERFACE": "bond0"
//                         }
//                     },
//                     {
//                         "LRU": "AI_1",
//                         "LRU_Config_Attributes": {
//                             "LMS_NET_INTERFACE": "eth1",
//                             "SDP_NET_INTERFACE": "eth1"
//                         }
//                     }
//                 ]
//             },
//             {
//                 "Section_Id": "2",
//                 "Hardware_Templates": [
//                     "T-FS_1-AI_1-FS_9-1"
//                 ],
//                 "Config_Attributes": {
//                     "LC_SHOW_ONLY_SW": "1",
//                     "LMS_NET_INTERFACE": "bond0",
//                     "SDP_NET_INTERFACE": "bond0",
//                     "LMS_CSL_SUPPORT_ON": "0",
//                     "DATA_CONCURRENT_TRANSFERS": "2",
//                     "DATA_CONCURRENT_INSTALLS": "2",
//                     "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//                     "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//                     "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//                     "MEDIA_DISPATCH_TIMEOUT": "20"
//                 },
//                 "LRU_Config": [
//                     {
//                         "LRU": "FS_1",
//                         "LRU_Config_Attributes": {}
//                     },
//                     {
//                         "LRU": "AI_1",
//                         "LRU_Config_Attributes": {}
//                     },
//                     {
//                         "LRU": "FS_9",
//                         "LRU_Config_Attributes": {}
//                     }
//                 ]
//             },
//             {
//                 "Section_Id": "3",
//                 "Hardware_Templates": [
//                     "T-AI_1-FS_9-1"
//                 ],
//                 "Config_Attributes": {
//                     "LC_SHOW_ONLY_SW": "1",
//                     "LMS_NET_INTERFACE": "bond0",
//                     "SDP_NET_INTERFACE": "bond0",
//                     "LMS_CSL_SUPPORT_ON": "0",
//                     "DATA_CONCURRENT_TRANSFERS": "2",
//                     "DATA_CONCURRENT_INSTALLS": "2",
//                     "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//                     "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//                     "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//                     "MEDIA_DISPATCH_TIMEOUT": "20"
//                 },
//                 "LRU_Config": [
//                     {
//                         "LRU": "AI_1",
//                         "LRU_Config_Attributes": {}
//                     },
//                     {
//                         "LRU": "FS_9",
//                         "LRU_Config_Attributes": {}
//                     }
//                 ]
//             }
//         ]
//     }
// }

const myBaseUiSchema={
  PlatformConfigHdr: {
    'ui:order': [
      'id',
      'name',
      'version',
      'generated_by',
      'generated_timestamp'
    ]
  },
  PlatformConfigBody: {
    Config_sections: {
      1: {
        Config_Attributes: {
          'ui:order': [
            'newInput1'
          ]
        },
        LRU_Config: {
          1: {
            LRU_Config_Attributes: {
              'ui:order': [
                'newInput1'
              ]
            },
            'ui:order': [
              'LRU',
              'LRU_Config_Attributes'
            ]
          },
          'ui:order': [
            '1'
          ]
        },
        'ui:order': [
          'Section_Id',
          'Hardware_Templates',
          'Config_Attributes',
          'LRU_Config'
        ]
      },
      'ui:order': [
        '1'
      ]
    },
    'ui:order': [
      'Config_sections'
    ]
  },
  'ui:order': [
    'PlatformConfigHdr',
    'PlatformConfigBody'
  ]
}

const selectedLRUs = [
  {
    "id": "62fcbf3f3c6421d6ad6254ba",
    "comment": "",
    "status": "DRAFT",
    "generatedBy": "vishal dhore",
    "generatedTimestamp": "2022-08-17T10:13:19.414Z",
    "modifiedBy": "vishal dhore",
    "modifiedAt": "2022-08-17T10:13:19.414Z",
    "HeadEndTemplateHdr": {
      "name": "IFE-NXT-IS_LIB_1",
      "version": "1.1"
    },
    "HeadEndTemplateMetaData": {
      "system": "NXT",
      "templateType": "IFE",
      "aircraftLayout": [],
      "aircraftType": [
        "A 320"
      ],
      "isSystemName": true
    },
    "HeadEndTemplateBody": {
      "lruSet": [
        {
          "name": "IS_LIB",
          "description": "",
          "type": 372,
          "subType": 4,
          "sortOrder": 2
        }
      ]
    }
  },
  {
    "id": "630e127527ed3bd0564189d7",
    "comment": "",
    "status": "DRAFT",
    "generatedBy": "sathishnagendra rao",
    "generatedTimestamp": "2022-08-30T13:36:53.320Z",
    "modifiedBy": "sathishnagendra rao",
    "modifiedAt": "2022-08-30T13:39:17.815Z",
    "HeadEndTemplateHdr": {
      "name": "IFE-NXT-CS_3",
      "version": "1.0"
    },
    "HeadEndTemplateMetaData": {
      "system": "NXT",
      "templateType": "IFE",
      "aircraftLayout": [
        "SANB"
      ],
      "aircraftType": [
        "A 319"
      ],
      "isSystemName": true
    },
    "HeadEndTemplateBody": {
      "lruSet": [
        {
          "name": "CS",
          "description": "",
          "type": 336,
          "subType": 3,
          "sortOrder": 4
        },
        {
          "name": "CS",
          "description": "",
          "type": 336,
          "subType": 3,
          "sortOrder": 4
        },
        {
          "name": "CS",
          "description": "",
          "type": 336,
          "subType": 3,
          "sortOrder": 4
        }
      ]
    }
  },
  {
    "id": "62cd5d813c6421d6ad6254a4",
    "comment": "THis is a trial for Active",
    "status": "ACTIVE",
    "generatedBy": "Afsar Shaikh",
    "generatedTimestamp": "2022-07-12T11:39:45.127Z",
    "modifiedBy": "Afsar Shaikh",
    "modifiedAt": "2022-07-12T11:39:45.127Z",
    "HeadEndTemplateHdr": {
      "name": "IFC-BC3_1-FS05_1",
      "version": "Version0.2"
    },
    "HeadEndTemplateMetaData": {
      "system": "XSER",
      "templateType": "IFC",
      "aircraftLayout": [
        "LRWB",
        "SANB"
      ],
      "aircraftType": [
        "A 318",
        "A 319"
      ],
      "isSystemName": true
    },
    "HeadEndTemplateBody": {
      "lruSet": [
        {
          "name": "BC3",
          "description": "",
          "type": 340,
          "subType": 4,
          "sortOrder": 2
        },
        {
          "name": "FS05",
          "description": "",
          "type": 193,
          "subType": 5,
          "sortOrder": 6
        }
      ]
    }
  }
]

function dynamicConfigSections(selectedLRUs)
{
  const config_sections= {};
   selectedLRUs.forEach((elem,i)=>{

    const lruConfig={};
    elem.HeadEndTemplateBody.lruSet.forEach((lruinfo, lruindex)=>{

      lruConfig[lruindex]={
        title: lruindex,
        type: 'object',
        description: lruindex,
        properties: {
          LRU: {
            title: 'LRU',
            type: 'string',
            description: 'LRU',
            default:lruinfo.name
          },
          LRU_Config_Attributes: {
            title: 'LRU_Config_Attributes',
            type: 'object',
            description: 'LRU_Config_Attributes',
            properties: {
              newInput1: {
                title: 'New Input 1',
                type: 'string'
              }
            },
            dependencies: {},
            required: []
          }
        },
        dependencies: {},
        required: [
          'LRU'
        ]
      }

    })
    config_sections[i]={
      title: i,
      type: 'object',
      description: i,
      properties: {
        Section_Id: {
          title: 'Section_Id',
          type: 'string',
          description: 'Section_Id'
        },
        Hardware_Templates: {
          title: 'Hardware_Templates',
          type: 'string',
          description: 'Hardware_Templates',
          default: elem.HeadEndTemplateHdr.name
        },
        Config_Attributes: {
          title: 'Config_Attributes',
          type: 'object',
          description: 'Config_Attributes',
          properties: {
            newInput1: {
              title: 'New Input 1',
              type: 'string'
            }
          },
          dependencies: {},
          required: []
        },
        LRU_Config: {
          title: 'LRU_Config',
          type: 'object',
          description: 'LRU_Config',
          properties: lruConfig,
          dependencies: {},
          required: [
            '1'
          ]
        }
      },
      dependencies: {},
      required: [
        'Section_Id',
        'Hardware_Templates',
        'Config_Attributes',
        'LRU_Config'
      ]
    }   
   })

   return config_sections;   
}

const myBaseSchema =
{
  type: 'object',
  properties: {
    PlatformConfigHdr: {
      title: 'PlatformConfigHdr',
      type: 'object',
      description: 'PlatformConfigHdr',
      properties: {
        id: {
          title: 'id',
          type: 'string',
          description: 'id'
        },
        name: {
          title: 'name',
          type: 'string',
          description: 'name'
        },
        version: {
          title: 'version',
          type: 'string',
          description: 'version'
        },
        generated_by: {
          title: 'generated_by',
          type: 'string',
          description: 'generated_by'
        },
        generated_timestamp: {
          title: 'generated_timestamp',
          type: 'string',
          description: 'generated_timestamp'
        }
      },
      dependencies: {},
      required: [
        'id',
        'name',
        'version',
        'generated_by',
        'generated_timestamp'
      ]
    },
    PlatformConfigBody: {
      title: 'PlatformConfigBody',
      type: 'object',
      description: 'PlatformConfigBody',
      properties: {
        Config_sections: {
          title: 'Config_sections',
          type: 'object',
          description: 'Config_sections',
          properties: dynamicConfigSections(selectedLRUs),
          dependencies: {},
          required: []
        }
      },
      dependencies: {},
      required: []
    }
  },
  dependencies: {},
  required: []
}

// const myBaseSchemaLatest = {
//     "$schema": "http://json-schema.org/draft-04/schema#",
//     "type": "object",
//     "properties": {
//       "Product_Config_Hdr": {
//         "type": "object",
//         "properties": {
//           "id": {
//             "type": "string"
//           },
//           "name": {
//             "type": "string"
//           },
//           "version": {
//             "type": "string"
//           },
//           "generated-by": {
//             "type": "string"
//           },
//           "generated-timestamp": {
//             "type": "string"
//           }
//         },
//         "required": [
//           "id",
//           "name",
//           "version",
//           "generated-by",
//           "generated-timestamp"
//         ]
//       },
//       "Product_Config_Body": {
//         "type": "object",
//         "properties": {
//           "Config _sections": {
//             "type": "array",
//             "items": [
//               {
//                 "type": "object",
//                 "properties": {
//                   "Section_Id": {
//                     "type": "string"
//                   },
//                   "Hardware_Templates": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "string"
//                       }
//                     ]
//                   },
//                   "Config_Attributes": {
//                     "type": "object",
//                     "properties": {
//                       "LC_SHOW_ONLY_SW": {
//                         "type": "string"
//                       },
//                       "LMS_CSL_SUPPORT_ON": {
//                         "type": "string"
//                       },
//                       "DATA_CONCURRENT_TRANSFERS": {
//                         "type": "string"
//                       },
//                       "DATA_CONCURRENT_INSTALLS": {
//                         "type": "string"
//                       },
//                       "LOADER_NETMONITOR_DEV": {
//                         "type": "string"
//                       },
//                       "LMS_KIT_MAX_VERSIONS_MEDIA": {
//                         "type": "string"
//                       },
//                       "LMS_KIT_MAX_VERSIONS_CONTENT": {
//                         "type": "string"
//                       },
//                       "MEDIA_DISPATCH_TIMEOUT": {
//                         "type": "string"
//                       }
//                     },
//                     "required": [
//                       "LC_SHOW_ONLY_SW",
//                       "LMS_CSL_SUPPORT_ON",
//                       "DATA_CONCURRENT_TRANSFERS",
//                       "DATA_CONCURRENT_INSTALLS",
//                       "LOADER_NETMONITOR_DEV",
//                       "LMS_KIT_MAX_VERSIONS_MEDIA",
//                       "LMS_KIT_MAX_VERSIONS_CONTENT",
//                       "MEDIA_DISPATCH_TIMEOUT"
//                     ]
//                   },
//                   "LRU_Config": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object",
//                             "properties": {
//                               "LMS_NET_INTERFACE": {
//                                 "type": "string"
//                               },
//                               "SDP_NET_INTERFACE": {
//                                 "type": "string"
//                               }
//                             },
//                             "required": [
//                               "LMS_NET_INTERFACE",
//                               "SDP_NET_INTERFACE"
//                             ]
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       },
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object",
//                             "properties": {
//                               "LMS_NET_INTERFACE": {
//                                 "type": "string"
//                               },
//                               "SDP_NET_INTERFACE": {
//                                 "type": "string"
//                               }
//                             },
//                             "required": [
//                               "LMS_NET_INTERFACE",
//                               "SDP_NET_INTERFACE"
//                             ]
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       }
//                     ]
//                   }
//                 },
//                 "required": [
//                   "Section_Id",
//                   "Hardware_Templates",
//                   "Config_Attributes",
//                   "LRU_Config"
//                 ]
//               },
//               {
//                 "type": "object",
//                 "properties": {
//                   "Section_Id": {
//                     "type": "string"
//                   },
//                   "Hardware_Templates": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "string"
//                       }
//                     ]
//                   },
//                   "Config_Attributes": {
//                     "type": "object",
//                     "properties": {
//                       "LC_SHOW_ONLY_SW": {
//                         "type": "string"
//                       },
//                       "LMS_NET_INTERFACE": {
//                         "type": "string"
//                       },
//                       "SDP_NET_INTERFACE": {
//                         "type": "string"
//                       },
//                       "LMS_CSL_SUPPORT_ON": {
//                         "type": "string"
//                       },
//                       "DATA_CONCURRENT_TRANSFERS": {
//                         "type": "string"
//                       },
//                       "DATA_CONCURRENT_INSTALLS": {
//                         "type": "string"
//                       },
//                       "LOADER_NETMONITOR_DEV": {
//                         "type": "string"
//                       },
//                       "LMS_KIT_MAX_VERSIONS_MEDIA": {
//                         "type": "string"
//                       },
//                       "LMS_KIT_MAX_VERSIONS_CONTENT": {
//                         "type": "string"
//                       },
//                       "MEDIA_DISPATCH_TIMEOUT": {
//                         "type": "string"
//                       }
//                     },
//                     "required": [
//                       "LC_SHOW_ONLY_SW",
//                       "LMS_NET_INTERFACE",
//                       "SDP_NET_INTERFACE",
//                       "LMS_CSL_SUPPORT_ON",
//                       "DATA_CONCURRENT_TRANSFERS",
//                       "DATA_CONCURRENT_INSTALLS",
//                       "LOADER_NETMONITOR_DEV",
//                       "LMS_KIT_MAX_VERSIONS_MEDIA",
//                       "LMS_KIT_MAX_VERSIONS_CONTENT",
//                       "MEDIA_DISPATCH_TIMEOUT"
//                     ]
//                   },
//                   "LRU_Config": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       },
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       },
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       }
//                     ]
//                   }
//                 },
//                 "required": [
//                   "Section_Id",
//                   "Hardware_Templates",
//                   "Config_Attributes",
//                   "LRU_Config"
//                 ]
//               },
//               {
//                 "type": "object",
//                 "properties": {
//                   "Section_Id": {
//                     "type": "string"
//                   },
//                   "Hardware_Templates": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "string"
//                       }
//                     ]
//                   },
//                   "Config_Attributes": {
//                     "type": "object",
//                     "properties": {
//                       "LC_SHOW_ONLY_SW": {
//                         "type": "string"
//                       },
//                       "LMS_NET_INTERFACE": {
//                         "type": "string"
//                       },
//                       "SDP_NET_INTERFACE": {
//                         "type": "string"
//                       },
//                       "LMS_CSL_SUPPORT_ON": {
//                         "type": "string"
//                       },
//                       "DATA_CONCURRENT_TRANSFERS": {
//                         "type": "string"
//                       },
//                       "DATA_CONCURRENT_INSTALLS": {
//                         "type": "string"
//                       },
//                       "LOADER_NETMONITOR_DEV": {
//                         "type": "string"
//                       },
//                       "LMS_KIT_MAX_VERSIONS_MEDIA": {
//                         "type": "string"
//                       },
//                       "LMS_KIT_MAX_VERSIONS_CONTENT": {
//                         "type": "string"
//                       },
//                       "MEDIA_DISPATCH_TIMEOUT": {
//                         "type": "string"
//                       }
//                     },
//                     "required": [
//                       "LC_SHOW_ONLY_SW",
//                       "LMS_NET_INTERFACE",
//                       "SDP_NET_INTERFACE",
//                       "LMS_CSL_SUPPORT_ON",
//                       "DATA_CONCURRENT_TRANSFERS",
//                       "DATA_CONCURRENT_INSTALLS",
//                       "LOADER_NETMONITOR_DEV",
//                       "LMS_KIT_MAX_VERSIONS_MEDIA",
//                       "LMS_KIT_MAX_VERSIONS_CONTENT",
//                       "MEDIA_DISPATCH_TIMEOUT"
//                     ]
//                   },
//                   "LRU_Config": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       },
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       }
//                     ]
//                   }
//                 },
//                 "required": [
//                   "Section_Id",
//                   "Hardware_Templates",
//                   "Config_Attributes",
//                   "LRU_Config"
//                 ]
//               }
//             ]
//           }
//         },
//         "required": [
//           "Config _sections"
//         ]
//       }
//     },
//     "required": [
//       "Product_Config_Hdr",
//       "Product_Config_Body"
//     ]
//   }

//   const json4 = {
//     "Product_Config_Hdr": {
//       "id": "12345",
//       "name": "LMS",
//       "version": "2.0",
//       "generated-by": "Admin",
//       "generated-timestamp": "09 Mar 2021 21:55:57"
//     },
//     "Product_Config_Body": {
//       "Config _sections": [
//         {
//           "Section_Id": "1",
//           "Hardware_Templates": [
//             "T-FS_1-AI_1-1"
//           ],
//           "Config_Attributes": {
//             "LC_SHOW_ONLY_SW": "1",
//             "LMS_CSL_SUPPORT_ON": "0",
//             "DATA_CONCURRENT_TRANSFERS": "2",
//             "DATA_CONCURRENT_INSTALLS": "2",
//             "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//             "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//             "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//             "MEDIA_DISPATCH_TIMEOUT": "20"
//           },
//           "LRU_Config": [
//             {
//               "LRU": "FS_1",
//               "LRU_Config_Attributes": {
//                 "LMS_NET_INTERFACE": "bond0",
//                 "SDP_NET_INTERFACE": "bond0"
//               }
//             },
//             {
//               "LRU": "AI_1",
//               "LRU_Config_Attributes": {
//                 "LMS_NET_INTERFACE": "eth1",
//                 "SDP_NET_INTERFACE": "eth1"
//               }
//             }
//           ]
//         },
//         {
//           "Section_Id": "2",
//           "Hardware_Templates": [
//             "T-FS_1-AI_1-FS_9-1"
//           ],
//           "Config_Attributes": {
//             "LC_SHOW_ONLY_SW": "1",
//             "LMS_NET_INTERFACE": "bond0",
//             "SDP_NET_INTERFACE": "bond0",
//             "LMS_CSL_SUPPORT_ON": "0",
//             "DATA_CONCURRENT_TRANSFERS": "2",
//             "DATA_CONCURRENT_INSTALLS": "2",
//             "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//             "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//             "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//             "MEDIA_DISPATCH_TIMEOUT": "20"
//           },
//           "LRU_Config": [
//             {
//               "LRU": "FS_1",
//               "LRU_Config_Attributes": {}
//             },
//             {
//               "LRU": "AI_1",
//               "LRU_Config_Attributes": {}
//             },
//             {
//               "LRU": "FS_9",
//               "LRU_Config_Attributes": {}
//             }
//           ]
//         },
//         {
//           "Section_Id": "3",
//           "Hardware_Templates": [
//             "T-AI_1-FS_9-1"
//           ],
//           "Config_Attributes": {
//             "LC_SHOW_ONLY_SW": "1",
//             "LMS_NET_INTERFACE": "bond0",
//             "SDP_NET_INTERFACE": "bond0",
//             "LMS_CSL_SUPPORT_ON": "0",
//             "DATA_CONCURRENT_TRANSFERS": "2",
//             "DATA_CONCURRENT_INSTALLS": "2",
//             "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
//             "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
//             "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
//             "MEDIA_DISPATCH_TIMEOUT": "20"
//           },
//           "LRU_Config": [
//             {
//               "LRU": "AI_1",
//               "LRU_Config_Attributes": {}
//             },
//             {
//               "LRU": "FS_9",
//               "LRU_Config_Attributes": {}
//             }
//           ]
//         }
//       ]
//     }
//   }

//   const mySchema5 = {
//     "$schema": "http://json-schema.org/draft-04/schema#",
//     "type": "object",
//     "properties": {
//       "Product_Config_Hdr": {
//         "type": "object",
//         "properties": {
//           "id": {
//             "type": "string"
//           },
//           "name": {
//             "type": "string"
//           },
//           "version": {
//             "type": "string"
//           },
//           "generated-by": {
//             "type": "string"
//           },
//           "generated-timestamp": {
//             "type": "string"
//           }
//         },
//         "required": [
//           "id",
//           "name",
//           "version",
//           "generated-by",
//           "generated-timestamp"
//         ]
//       },
//       "Product_Config_Body": {
//         "type": "object",
//         "properties": {
//           "Config _sections": {
//             "type": "array",
//             "items": [
//               {
//                 "type": "object",
//                 "properties": {
//                   "Section_Id": {
//                     "type": "string"
//                   },
//                   "Hardware_Templates": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "string"
//                       }
//                     ]
//                   },
//                   "Config_Attributes": {
//                     "type": "object",
//                     "properties": {
//                       "EnterConfigAttribute": {
//                         "type": "string"
//                       }
//                     },
//                     "required": [
//                       "EnterConfigAttribute"
//                     ]
//                   },
//                   "LRU_Config": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object",
//                             "properties": {
//                               "EnterLRUConfigAttribute": {
//                                 "type": "string"
//                               }
//                             },
//                             "required": [
//                               "EnterLRUConfigAttribute"
//                             ]
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       },
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object",
//                             "properties": {
//                               "EnterLRUConfigAttribute": {
//                                 "type": "string"
//                               }
//                             },
//                             "required": [
//                               "EnterLRUConfigAttribute"
//                             ]
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       }
//                     ]
//                   }
//                 },
//                 "required": [
//                   "Section_Id",
//                   "Hardware_Templates",
//                   "Config_Attributes",
//                   "LRU_Config"
//                 ]
//               },
//               {
//                 "type": "object",
//                 "properties": {
//                   "Section_Id": {
//                     "type": "string"
//                   },
//                   "Hardware_Templates": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "string"
//                       }
//                     ]
//                   },
//                   "Config_Attributes": {
//                     "type": "object",
//                     "properties": {
//                       "EnterConfigAttribute": {
//                         "type": "string"
//                       }
//                     },
//                     "required": [
//                       "EnterConfigAttribute"
//                     ]
//                   },
//                   "LRU_Config": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       },
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       },
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       }
//                     ]
//                   }
//                 },
//                 "required": [
//                   "Section_Id",
//                   "Hardware_Templates",
//                   "Config_Attributes",
//                   "LRU_Config"
//                 ]
//               },
//               {
//                 "type": "object",
//                 "properties": {
//                   "Section_Id": {
//                     "type": "string"
//                   },
//                   "Hardware_Templates": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "string"
//                       }
//                     ]
//                   },
//                   "Config_Attributes": {
//                     "type": "object",
//                     "properties": {
//                       "EnterConfigAttribute": {
//                         "type": "string"
//                       }
//                     },
//                     "required": [
//                       "EnterConfigAttribute"
//                     ]
//                   },
//                   "LRU_Config": {
//                     "type": "array",
//                     "items": [
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       },
//                       {
//                         "type": "object",
//                         "properties": {
//                           "LRU": {
//                             "type": "string"
//                           },
//                           "LRU_Config_Attributes": {
//                             "type": "object"
//                           }
//                         },
//                         "required": [
//                           "LRU",
//                           "LRU_Config_Attributes"
//                         ]
//                       }
//                     ]
//                   }
//                 },
//                 "required": [
//                   "Section_Id",
//                   "Hardware_Templates",
//                   "Config_Attributes",
//                   "LRU_Config"
//                 ]
//               }
//             ]
//           }
//         },
//         "required": [
//           "Config _sections"
//         ]
//       }
//     },
//     "required": [
//       "Product_Config_Hdr",
//       "Product_Config_Body"
//     ]
//   }


// export { mySchema1, mySchema2, json1, json2, json3, mySchema3, myBaseSchema, json4, myBaseSchemaLatest, mySchema5,myBaseUiSchema }
export { myBaseSchema, myBaseUiSchema }




