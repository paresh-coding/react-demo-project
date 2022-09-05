

const mySchema1 = {
    "$schema": "http://json-schema.org/draft-06/schema#",

    "definitions": {
        "ConfigSection": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "Section_Id": {
                    "type": "string",
                    "format": "integer"
                },
                "Hardware_Templates": {
                    "type": "string",
                    "title": "Hardware Template",
                },
                "Config_Attributes": {
                    "$ref": "#/definitions/ConfigAttributes"
                },
                "LRU_Config": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/LRUConfig"
                    }
                }
            },
            "required": [
                "Config_Attributes",
                "Hardware_Templates",
                "LRU_Config",
                "Section_Id"
            ],
            "title": "ConfigSection"
        },
        "ConfigAttributes": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "LC_SHOW_ONLY_SW": {
                    "type": "string",
                    "format": "integer"
                },
                "LMS_CSL_SUPPORT_ON": {
                    "type": "string",
                    "format": "integer"
                },
                "DATA_CONCURRENT_TRANSFERS": {
                    "type": "string",
                    "format": "integer"
                },
                "DATA_CONCURRENT_INSTALLS": {
                    "type": "string",
                    "format": "integer"
                },
                "LOADER_NETMONITOR_DEV": {
                    "type": "string"
                },
                "LMS_KIT_MAX_VERSIONS_MEDIA": {
                    "type": "string",
                    "format": "integer"
                },
                "LMS_KIT_MAX_VERSIONS_CONTENT": {
                    "type": "string",
                    "format": "integer"
                },
                "MEDIA_DISPATCH_TIMEOUT": {
                    "type": "string",
                    "format": "integer"
                },
                "LMS_NET_INTERFACE": {
                    "type": "string"
                },
                "SDP_NET_INTERFACE": {
                    "type": "string"
                }
            },
            "required": [
                "DATA_CONCURRENT_INSTALLS",
                "DATA_CONCURRENT_TRANSFERS",
                "LC_SHOW_ONLY_SW",
                "LMS_CSL_SUPPORT_ON",
                "LMS_KIT_MAX_VERSIONS_CONTENT",
                "LMS_KIT_MAX_VERSIONS_MEDIA",
                "LOADER_NETMONITOR_DEV",
                "MEDIA_DISPATCH_TIMEOUT"
            ],
            "title": "ConfigAttributes"
        },
        "LRUConfig": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "LRU": {
                    "type": "string",
                    "enum": [
                        "FS_1",
                        "AI_1",
                        "FS_1",
                        "FS_1",
                        "AI_1",
                    ]
                },
                "LRU_Config_Attributes": {
                    "$ref": "#/definitions/LRUConfigAttributes"
                }
            },
            "required": [
                "LRU",
                "LRU_Config_Attributes"
            ],
            "title": "LRUConfig"
        },
        "LRUConfigAttributes": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "LMS_NET_INTERFACE": {
                    "type": "string"
                },
                "SDP_NET_INTERFACE": {
                    "type": "string"
                }
            },
            "required": [],
            "title": "LRUConfigAttributes"
        },
        "ProductConfigHdr": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "id": {
                    "type": "string",
                    "format": "integer"
                },
                "name": {
                    "type": "string"
                },
                "version": {
                    "type": "string"
                },
                "generated-by": {
                    "type": "string"
                },
                "generated-timestamp": {
                    "type": "string"
                }
            },
            "required": [
                "generated-by",
                "generated-timestamp",
                "id",
                "name",
                "version"
            ],
            "title": "ProductConfigHdr"
        }
    }
};


const baseSchema = {
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "PlatformConfigHdr": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "id": {
                    "type": "string",
                    "format": "integer"
                },
                "name": {
                    "type": "string"
                },
                "version": {
                    "type": "string"
                },
                "generated-by": {
                    "type": "string"
                },
                "generated-timestamp": {
                    "type": "string"
                }
            },
            "required": [
                "generated-by",
                "generated-timestamp",
                "id",
                "name",
                "version"
            ],
            "title": "PlatformConfigHdr"
        },
        "PlatformConfigBody": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "Config _sections": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "additionalProperties": false,
                        "properties": {
                            "Section_Id": {
                                "type": "string",
                                "format": "integer"
                            },
                            "Hardware_Templates": {
                                "type": "array",
                                "items": {
                                    "type": "string",
                                    "default": "T-BC_-FS_9-1" /*Default value pre-populated from LRU Template*/
                                }
                            },
                            "Config_Attributes": {
                                "type": "object",
                                "additionalProperties": false,
                                "properties": {
                                    "insert_config_attributes": { /*This with assumption, values will be entered by user*/
                                        "type": "string",
                                        "format": "integer"
                                    }
                                },
                                "required": [
                                    "insert_config_attributes"
                                ],
                                "title": "ConfigAttributes"
                            },
                            "LRU_Config": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "additionalProperties": false,
                                    "properties": {
                                        "LRU": {
                                            "type": "string",
                                            "default": "BC_03" /*Default LRU Config value pre-populated based on LRU Template*/
                                        },
                                        "LRU_Config_Attributes": {
                                            "type": "object",
                                            "additionalProperties": false,
                                            "properties": {
                                                "insert_LRU_Config_Attributes_1": { /*This with assumption, values will be entered by user*/
                                                    "type": "string"
                                                }
                                            },
                                            "required": [],
                                            "title": "LRUConfigAttributes"
                                        }
                                    },
                                    "required": [
                                        "LRU",
                                        "LRU_Config_Attributes"
                                    ],
                                    "title": "LRUConfig"
                                }
                            }
                        },
                        "required": [
                            "Config_Attributes",
                            "Hardware_Templates",
                            "LRU_Config",
                            "Section_Id"
                        ],
                        "title": "ConfigSection"
                    }
                }
            },
            "required": [
                "Config _sections"
            ],
            "title": "PlatformConfigBody"
        }
    },
    "required": [
        "PlatformConfigBody",
        "PlatformConfigHdr"
    ],
    "title": "HMS" /*This schema is for HMS Product*/
};


//  "Welcome10": {
//      "type": "object",
//      "additionalProperties": false,
//      "properties": {
//          "Product_Config_Hdr": {
//              "$ref": "#/definitions/ProductConfigHdr"
//          },
//          "Product_Config_Body": {
//              "$ref": "#/definitions/ProductConfigBody"
//          }
//      },
//      "required": [
//          "Product_Config_Body",
//          "Product_Config_Hdr"
//      ],
//      "title": "Welcome10"
//  },
const json1 =
{
    "Product_Config_Hdr": {
        "id": "12345",
        "name": "LMS",
        "version": "2.0",
        "generated-by": "Admin",
        "generated-timestamp": "09 Mar 2021 21:55:57"
    },
    "Product_Config_Body": {
        "Config_sections": [
            {
                "Section_Id": "1",
                "Hardware_Templates": [
                    "T-FS_1-AI_1-1"
                ],
                "Config_Attributes": {
                    "LC_SHOW_ONLY_SW": "1",
                    "LMS_CSL_SUPPORT_ON": "0",
                    "DATA_CONCURRENT_TRANSFERS": "2",
                    "DATA_CONCURRENT_INSTALLS": "2",
                    "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
                    "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
                    "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
                    "MEDIA_DISPATCH_TIMEOUT": "20"
                },
                "LRU_Config": [
                    {
                        "LRU": "FS_1",
                        "LRU_Config_Attributes": {
                            "LMS_NET_INTERFACE": "bond0",
                            "SDP_NET_INTERFACE": "bond0"
                        }
                    },
                    {
                        "LRU": "AI_1",
                        "LRU_Config_Attributes": {
                            "LMS_NET_INTERFACE": "eth1",
                            "SDP_NET_INTERFACE": "eth1"
                        }
                    }
                ]
            },
            {
                "Section_Id": "2",
                "Hardware_Templates": [
                    "T-FS_1-AI_1-FS_9-1"
                ],
                "Config_Attributes": {
                    "LC_SHOW_ONLY_SW": "1",
                    "LMS_NET_INTERFACE": "bond0",
                    "SDP_NET_INTERFACE": "bond0",
                    "LMS_CSL_SUPPORT_ON": "0",
                    "DATA_CONCURRENT_TRANSFERS": "2",
                    "DATA_CONCURRENT_INSTALLS": "2",
                    "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
                    "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
                    "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
                    "MEDIA_DISPATCH_TIMEOUT": "20"
                },
                "LRU_Config": [
                    {
                        "LRU": "FS_1",
                        "LRU_Config_Attributes": {}
                    },
                    {
                        "LRU": "AI_1",
                        "LRU_Config_Attributes": {}
                    },
                    {
                        "LRU": "FS_9",
                        "LRU_Config_Attributes": {}
                    }
                ]
            },
            {
                "Section_Id": "3",
                "Hardware_Templates": [
                    "T-AI_1-FS_9-1"
                ],
                "Config_Attributes": {
                    "LC_SHOW_ONLY_SW": "1",
                    "LMS_NET_INTERFACE": "bond0",
                    "SDP_NET_INTERFACE": "bond0",
                    "LMS_CSL_SUPPORT_ON": "0",
                    "DATA_CONCURRENT_TRANSFERS": "2",
                    "DATA_CONCURRENT_INSTALLS": "2",
                    "LOADER_NETMONITOR_DEV": "pdl,pdl1,pdl2",
                    "LMS_KIT_MAX_VERSIONS_MEDIA": "2",
                    "LMS_KIT_MAX_VERSIONS_CONTENT": "1",
                    "MEDIA_DISPATCH_TIMEOUT": "20"
                },
                "LRU_Config": [
                    {
                        "LRU": "AI_1",
                        "LRU_Config_Attributes": {}
                    },
                    {
                        "LRU": "FS_9",
                        "LRU_Config_Attributes": {}
                    }
                ]
            }
        ]
    }
};
const mySchema2 = {

    "$ref": "#/definitions/Welcome2",
    "definitions": {
        "Welcome2": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "Product_Config_Hdr": {
                    "$ref": "#/definitions/ProductConfigHdr"
                },
                "Product_Config_Body": {
                    "$ref": "#/definitions/ProductConfigBody"
                }
            },
            "required": [
                "Product_Config_Body",
                "Product_Config_Hdr"
            ],
            "title": "Welcome2"
        },
        "ProductConfigBody": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "catalog_shopping_app": {
                    "type": "string"
                },
                "catalog_shopping_inventory": {
                    "type": "string"
                },
                "catalog_shop_inventory_offload_max_files": {
                    "type": "string",
                    "format": "integer"
                },
                "catalog_shop_order_offload_max_files": {
                    "type": "string",
                    "format": "integer"
                },
                "catalog_shopping_payment_support": {
                    "type": "string"
                },
                "catalog_hospitality_app": {
                    "type": "string"
                },
                "catalog_hospitality_inventory": {
                    "type": "string"
                },
                "catalog_hosp_inventory_offload_max_files": {
                    "type": "string",
                    "format": "integer"
                },
                "catalog_hosp_order_offload_max_files": {
                    "type": "string",
                    "format": "integer"
                },
                "catalog_hospitality_payment_support": {
                    "type": "string"
                }
            },
            "required": [
                "catalog_hosp_inventory_offload_max_files",
                "catalog_hosp_order_offload_max_files",
                "catalog_hospitality_app",
                "catalog_hospitality_inventory",
                "catalog_hospitality_payment_support",
                "catalog_shop_inventory_offload_max_files",
                "catalog_shop_order_offload_max_files",
                "catalog_shopping_app",
                "catalog_shopping_inventory",
                "catalog_shopping_payment_support"
            ],
            "title": "ProductConfigBody"
        },
        "ProductConfigHdr": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "id": {
                    "type": "string",
                    "format": "integer"
                },
                "name": {
                    "type": "string"
                },
                "version": {
                    "type": "string"
                },
                "generated-by": {
                    "type": "string"
                },
                "generated-timestamp": {
                    "type": "string"
                }
            },
            "required": [
                "generated-by",
                "generated-timestamp",
                "id",
                "name",
                "version"
            ],
            "title": "ProductConfigHdr"
        }
    }
}


const json2 = {
    "Product_Config_Hdr": {
        "id": "256",
        "name": "Marketplace Catalog",
        "version": "2.5",
        "generated-by": "Admin",
        "generated-timestamp": "11 Mar 2021 21:55:57"
    },
    "Product_Config_Body": {
        "catalog_shopping_app": "on",
        "catalog_shopping_inventory": "on",
        "catalog_shop_inventory_offload_max_files": "10",
        "catalog_shop_order_offload_max_files": "50",
        "catalog_shopping_payment_support": "on",
        "catalog_hospitality_app": "off",
        "catalog_hospitality_inventory": "off",
        "catalog_hosp_inventory_offload_max_files": "10",
        "catalog_hosp_order_offload_max_files": "50",
        "catalog_hospitality_payment_support": "off"
    }
}

export { mySchema1, mySchema2, json1, json2, baseSchema }




