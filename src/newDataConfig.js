const mySchema1 = {
   
    "$ref": "#/definitions/Welcome10",
    "definitions": {
        "Welcome10": {
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
            "title": "Welcome10"
        },
        "ProductConfigBody": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "Config _sections": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/ConfigSection"
                    }
                }
            },
            "required": [
                "Config _sections"
            ],
            "title": "ProductConfigBody"
        },
        "ConfigSection": {
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
                        "type": "string"
                    }
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
                    "type": "string"
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

    "$ref": "#/definitions/Marketplace",
    "definitions": {
        "Marketplace": {
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
            "title": "MARKETPLACE"
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

const mySchema3 =
{
    "type": "object",
    "additionalProperties": false,
    "properties": {
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
        },
        "ProductConfigBody": {
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
                                    "type": "string"
                                }
                            },
                            "Config_Attributes": {
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
                            "LRU_Config": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "additionalProperties": false,
                                    "properties": {
                                        "LRU": {
                                            "type": "string"
                                        },
                                        "LRU_Config_Attributes": {
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
            "title": "ProductConfigBody"
        }
    },
    "required": [
        "Product_Config_Body",
        "Product_Config_Hdr"
    ],
    "title": "LMS"
}


const json3 = {
    "Product_Config_Hdr": {
        "id": "12345",
        "name": "LMS",
        "version": "2.0",
        "generated-by": "Admin",
        "generated-timestamp": "09 Mar 2021 21:55:57"
    },
    "Product_Config_Body": {
        "Config _sections": [
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
}

const myBaseUiSchema = {
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
      items: {
        Config_Attributes: {
          'ui:order': [
            'newInput1'
          ]
        },
        LRU_Config: {
          items: {
            LRU_Config_Attributes: {
              'ui:order': [
                'newInput1'
              ]
            },
            'ui:order': [
              'LRU',
              'LRU_Config_Attributes'
            ]
          }
        },
        'ui:order': [
          'Section_Id',
          'Hardware_Templates',
          'Config_Attributes',
          'LRU_Config'
        ]
      }
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
          description: 'id',
          default: '1'
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
          properties: {
            1: {
              title: '1',
              type: 'object',
              properties: {
                Section_Id: {
                  title: 'Section_Id',
                  type: 'string',
                  description: 'Section_Id'
                },
                Hardware_Templates: {
                  title: 'Hardware_Templates',
                  type: 'string'
                },
                Config_Attributes: {
                  title: 'Config_Attributes',
                  type: 'object',
                  description: 'Config_Attributes',
                  properties: {
                    LC_SHOW_ONLY_SW: {
                      title: 'LC_SHOW_ONLY_SW',
                      type: 'string',
                      description: 'LC_SHOW_ONLY_SW',
                      default: '1'
                    },
                    LMS_CSL_SUPPORT_ON: {
                      title: 'LMS_CSL_SUPPORT_ON',
                      type: 'string',
                      description: 'LMS_CSL_SUPPORT_ON',
                      default: '0'
                    }
                  },
                  dependencies: {},
                  required: [
                    'LC_SHOW_ONLY_SW'
                  ]
                },
                LRU_Config: {
                  title: 'LRU_Config',
                  type: 'object',
                  description: 'LRU_Config',
                  properties: {
                    1: {
                      title: '1',
                      type: 'object',
                      description: '1',
                      properties: {
                        LRU: {
                          title: 'LRU',
                          type: 'string',
                          description: 'LRU',
                          default: 'FS_1'
                        },
                        LRU_Config_Attributes: {
                          title: 'LRU_Config_Attributes',
                          type: 'object',
                          description: 'LRU_Config_Attributes',
                          properties: {
                            LMS_NET_INTERFACE: {
                              title: 'LMS_NET_INTERFACE',
                              type: 'string',
                              description: 'LMS_NET_INTERFACE',
                              default: 'bond0'
                            },
                            SDP_NET_INTERFACE: {
                              title: 'SDP_NET_INTERFACE',
                              type: 'string',
                              description: 'SDP_NET_INTERFACE',
                              default: 'bond0'
                            }
                          },
                          dependencies: {},
                          required: []
                        }
                      },
                      dependencies: {},
                      required: []
                    },
                    2: {
                      title: '2',
                      type: 'object',
                      description: '2',
                      properties: {
                        LRU: {
                          title: 'LRU',
                          type: 'string',
                          description: 'LRU',
                          default: 'AI_1'
                        },
                        LRU_Config_Attributes: {
                          title: 'LRU_Config_Attributes',
                          type: 'object',
                          description: 'LRU_Config_Attributes',
                          properties: {
                            LMS_NET_INTERFACE: {
                              title: 'LMS_NET_INTERFACE',
                              type: 'string',
                              description: 'LMS_NET_INTERFACE',
                              default: 'eth1'
                            }
                          },
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
              },
              dependencies: {},
              required: [
                'Section_Id',
                'Hardware_Templates'
              ],
              description: '1'
            },
            2: {
              title: '2',
              type: 'object',
              properties: {
                Section_Id: {
                  title: 'Section_Id',
                  type: 'string',
                  description: 'Section_Id'
                },
                Hardware_Templates: {
                  title: 'Hardware_Templates',
                  type: 'string'
                },
                Config_Attributes: {
                  title: 'Config_Attributes',
                  type: 'object',
                  description: 'Config_Attributes',
                  properties: {
                    DATA_CONCURRENT_TRANSFERS: {
                      title: 'DATA_CONCURRENT_TRANSFERS',
                      type: 'string',
                      description: 'DATA_CONCURRENT_TRANSFERS',
                      default: '2'
                    },
                    DATA_CONCURRENT_INSTALLS: {
                      title: 'DATA_CONCURRENT_INSTALLS',
                      type: 'string',
                      description: 'DATA_CONCURRENT_INSTALLS',
                      default: '2'
                    }
                  },
                  dependencies: {},
                  required: []
                },
                LRU_Config: {
                  title: 'LRU_Config',
                  type: 'object',
                  description: 'LRU_Config',
                  properties: {},
                  dependencies: {},
                  required: []
                }
              },
              dependencies: {},
              required: [
                'Section_Id',
                'Hardware_Templates'
              ],
              description: '2'
            },
            3: {
              title: '3',
              type: 'object',
              properties: {
                Section_Id: {
                  title: 'Section_Id',
                  type: 'string',
                  description: 'Section_Id'
                },
                Hardware_Templates: {
                  title: 'Hardware_Templates',
                  type: 'string'
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
                  items: {
                    type: 'object',
                    properties: {
                      LRU: {
                        title: 'LRU',
                        type: 'string',
                        description: 'LRU'
                      },
                      LRU_Config_Attributes: {
                        title: 'LRU_Config_Attributes',
                        type: 'object',
                        description: 'LRU_Config_Attributes'
                      }
                    },
                    dependencies: {},
                    required: []
                  },
                  title: 'LRU_Config',
                  type: 'array'
                }
              },
              dependencies: {},
              required: [
                'Section_Id',
                'Hardware_Templates'
              ],
              description: '3'
            }
          },
          dependencies: {},
          required: []
        }
      },
      dependencies: {},
      required: []
    }
  },
  dependencies: {},
  required: [
    'PlatformConfigHdr',
    'PlatformConfigBody'
  ]
}

const myBaseSchemaLatest = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "Product_Config_Hdr": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
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
          "id",
          "name",
          "version",
          "generated-by",
          "generated-timestamp"
        ]
      },
      "Product_Config_Body": {
        "type": "object",
        "properties": {
          "Config _sections": {
            "type": "array",
            "items": [
              {
                "type": "object",
                "properties": {
                  "Section_Id": {
                    "type": "string"
                  },
                  "Hardware_Templates": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "Config_Attributes": {
                    "type": "object",
                    "properties": {
                      "LC_SHOW_ONLY_SW": {
                        "type": "string"
                      },
                      "LMS_CSL_SUPPORT_ON": {
                        "type": "string"
                      },
                      "DATA_CONCURRENT_TRANSFERS": {
                        "type": "string"
                      },
                      "DATA_CONCURRENT_INSTALLS": {
                        "type": "string"
                      },
                      "LOADER_NETMONITOR_DEV": {
                        "type": "string"
                      },
                      "LMS_KIT_MAX_VERSIONS_MEDIA": {
                        "type": "string"
                      },
                      "LMS_KIT_MAX_VERSIONS_CONTENT": {
                        "type": "string"
                      },
                      "MEDIA_DISPATCH_TIMEOUT": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "LC_SHOW_ONLY_SW",
                      "LMS_CSL_SUPPORT_ON",
                      "DATA_CONCURRENT_TRANSFERS",
                      "DATA_CONCURRENT_INSTALLS",
                      "LOADER_NETMONITOR_DEV",
                      "LMS_KIT_MAX_VERSIONS_MEDIA",
                      "LMS_KIT_MAX_VERSIONS_CONTENT",
                      "MEDIA_DISPATCH_TIMEOUT"
                    ]
                  },
                  "LRU_Config": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "LRU": {
                            "type": "string"
                          },
                          "LRU_Config_Attributes": {
                            "type": "object",
                            "properties": {
                              "LMS_NET_INTERFACE": {
                                "type": "string"
                              },
                              "SDP_NET_INTERFACE": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "LMS_NET_INTERFACE",
                              "SDP_NET_INTERFACE"
                            ]
                          }
                        },
                        "required": [
                          "LRU",
                          "LRU_Config_Attributes"
                        ]
                      },
                      {
                        "type": "object",
                        "properties": {
                          "LRU": {
                            "type": "string"
                          },
                          "LRU_Config_Attributes": {
                            "type": "object",
                            "properties": {
                              "LMS_NET_INTERFACE": {
                                "type": "string"
                              },
                              "SDP_NET_INTERFACE": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "LMS_NET_INTERFACE",
                              "SDP_NET_INTERFACE"
                            ]
                          }
                        },
                        "required": [
                          "LRU",
                          "LRU_Config_Attributes"
                        ]
                      }
                    ]
                  }
                },
                "required": [
                  "Section_Id",
                  "Hardware_Templates",
                  "Config_Attributes",
                  "LRU_Config"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "Section_Id": {
                    "type": "string"
                  },
                  "Hardware_Templates": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "Config_Attributes": {
                    "type": "object",
                    "properties": {
                      "LC_SHOW_ONLY_SW": {
                        "type": "string"
                      },
                      "LMS_NET_INTERFACE": {
                        "type": "string"
                      },
                      "SDP_NET_INTERFACE": {
                        "type": "string"
                      },
                      "LMS_CSL_SUPPORT_ON": {
                        "type": "string"
                      },
                      "DATA_CONCURRENT_TRANSFERS": {
                        "type": "string"
                      },
                      "DATA_CONCURRENT_INSTALLS": {
                        "type": "string"
                      },
                      "LOADER_NETMONITOR_DEV": {
                        "type": "string"
                      },
                      "LMS_KIT_MAX_VERSIONS_MEDIA": {
                        "type": "string"
                      },
                      "LMS_KIT_MAX_VERSIONS_CONTENT": {
                        "type": "string"
                      },
                      "MEDIA_DISPATCH_TIMEOUT": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "LC_SHOW_ONLY_SW",
                      "LMS_NET_INTERFACE",
                      "SDP_NET_INTERFACE",
                      "LMS_CSL_SUPPORT_ON",
                      "DATA_CONCURRENT_TRANSFERS",
                      "DATA_CONCURRENT_INSTALLS",
                      "LOADER_NETMONITOR_DEV",
                      "LMS_KIT_MAX_VERSIONS_MEDIA",
                      "LMS_KIT_MAX_VERSIONS_CONTENT",
                      "MEDIA_DISPATCH_TIMEOUT"
                    ]
                  },
                  "LRU_Config": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "LRU": {
                            "type": "string"
                          },
                          "LRU_Config_Attributes": {
                            "type": "object"
                          }
                        },
                        "required": [
                          "LRU",
                          "LRU_Config_Attributes"
                        ]
                      },
                      {
                        "type": "object",
                        "properties": {
                          "LRU": {
                            "type": "string"
                          },
                          "LRU_Config_Attributes": {
                            "type": "object"
                          }
                        },
                        "required": [
                          "LRU",
                          "LRU_Config_Attributes"
                        ]
                      },
                      {
                        "type": "object",
                        "properties": {
                          "LRU": {
                            "type": "string"
                          },
                          "LRU_Config_Attributes": {
                            "type": "object"
                          }
                        },
                        "required": [
                          "LRU",
                          "LRU_Config_Attributes"
                        ]
                      }
                    ]
                  }
                },
                "required": [
                  "Section_Id",
                  "Hardware_Templates",
                  "Config_Attributes",
                  "LRU_Config"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "Section_Id": {
                    "type": "string"
                  },
                  "Hardware_Templates": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "Config_Attributes": {
                    "type": "object",
                    "properties": {
                      "LC_SHOW_ONLY_SW": {
                        "type": "string"
                      },
                      "LMS_NET_INTERFACE": {
                        "type": "string"
                      },
                      "SDP_NET_INTERFACE": {
                        "type": "string"
                      },
                      "LMS_CSL_SUPPORT_ON": {
                        "type": "string"
                      },
                      "DATA_CONCURRENT_TRANSFERS": {
                        "type": "string"
                      },
                      "DATA_CONCURRENT_INSTALLS": {
                        "type": "string"
                      },
                      "LOADER_NETMONITOR_DEV": {
                        "type": "string"
                      },
                      "LMS_KIT_MAX_VERSIONS_MEDIA": {
                        "type": "string"
                      },
                      "LMS_KIT_MAX_VERSIONS_CONTENT": {
                        "type": "string"
                      },
                      "MEDIA_DISPATCH_TIMEOUT": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "LC_SHOW_ONLY_SW",
                      "LMS_NET_INTERFACE",
                      "SDP_NET_INTERFACE",
                      "LMS_CSL_SUPPORT_ON",
                      "DATA_CONCURRENT_TRANSFERS",
                      "DATA_CONCURRENT_INSTALLS",
                      "LOADER_NETMONITOR_DEV",
                      "LMS_KIT_MAX_VERSIONS_MEDIA",
                      "LMS_KIT_MAX_VERSIONS_CONTENT",
                      "MEDIA_DISPATCH_TIMEOUT"
                    ]
                  },
                  "LRU_Config": {
                    "type": "array",
                    "items": [
                      {
                        "type": "object",
                        "properties": {
                          "LRU": {
                            "type": "string"
                          },
                          "LRU_Config_Attributes": {
                            "type": "object"
                          }
                        },
                        "required": [
                          "LRU",
                          "LRU_Config_Attributes"
                        ]
                      },
                      {
                        "type": "object",
                        "properties": {
                          "LRU": {
                            "type": "string"
                          },
                          "LRU_Config_Attributes": {
                            "type": "object"
                          }
                        },
                        "required": [
                          "LRU",
                          "LRU_Config_Attributes"
                        ]
                      }
                    ]
                  }
                },
                "required": [
                  "Section_Id",
                  "Hardware_Templates",
                  "Config_Attributes",
                  "LRU_Config"
                ]
              }
            ]
          }
        },
        "required": [
          "Config _sections"
        ]
      }
    },
    "required": [
      "Product_Config_Hdr",
      "Product_Config_Body"
    ]
  }

  const json4 = {
    "Product_Config_Hdr": {
      "id": "12345",
      "name": "LMS",
      "version": "2.0",
      "generated-by": "Admin",
      "generated-timestamp": "09 Mar 2021 21:55:57"
    },
    "Product_Config_Body": {
      "Config _sections": [
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
  }

  const mySchema5 = {
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
            description: 'id',
            default: '1'
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
            properties: {
              1: {
                title: '1',
                type: 'object',
                properties: {
                  Section_Id: {
                    title: 'Section_Id',
                    type: 'string',
                    description: 'Section_Id'
                  },
                  Hardware_Templates: {
                    title: 'Hardware_Templates',
                    type: 'string'
                  },
                  Config_Attributes: {
                    title: 'Config_Attributes',
                    type: 'object',
                    description: 'Config_Attributes',
                    properties: {
                      LC_SHOW_ONLY_SW: {
                        title: 'LC_SHOW_ONLY_SW',
                        type: 'string',
                        description: 'LC_SHOW_ONLY_SW',
                        default: '1'
                      },
                      LMS_CSL_SUPPORT_ON: {
                        title: 'LMS_CSL_SUPPORT_ON',
                        type: 'string',
                        description: 'LMS_CSL_SUPPORT_ON',
                        default: '0'
                      }
                    },
                    dependencies: {},
                    required: [
                      'LC_SHOW_ONLY_SW'
                    ]
                  },
                  LRU_Config: {
                    title: 'LRU_Config',
                    type: 'object',
                    description: 'LRU_Config',
                    properties: {
                      1: {
                        title: '1',
                        type: 'object',
                        description: '1',
                        properties: {
                          LRU: {
                            title: 'LRU',
                            type: 'string',
                            description: 'LRU',
                            default: 'FS_1'
                          },
                          LRU_Config_Attributes: {
                            title: 'LRU_Config_Attributes',
                            type: 'object',
                            description: 'LRU_Config_Attributes',
                            properties: {
                              LMS_NET_INTERFACE: {
                                title: 'LMS_NET_INTERFACE',
                                type: 'string',
                                description: 'LMS_NET_INTERFACE',
                                default: 'bond0'
                              },
                              SDP_NET_INTERFACE: {
                                title: 'SDP_NET_INTERFACE',
                                type: 'string',
                                description: 'SDP_NET_INTERFACE',
                                default: 'bond0'
                              }
                            },
                            dependencies: {},
                            required: []
                          }
                        },
                        dependencies: {},
                        required: []
                      },
                      2: {
                        title: '2',
                        type: 'object',
                        description: '2',
                        properties: {
                          LRU: {
                            title: 'LRU',
                            type: 'string',
                            description: 'LRU',
                            default: 'AI_1'
                          },
                          LRU_Config_Attributes: {
                            title: 'LRU_Config_Attributes',
                            type: 'object',
                            description: 'LRU_Config_Attributes',
                            properties: {
                              LMS_NET_INTERFACE: {
                                title: 'LMS_NET_INTERFACE',
                                type: 'string',
                                description: 'LMS_NET_INTERFACE',
                                default: 'eth1'
                              }
                            },
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
                },
                dependencies: {},
                required: [
                  'Section_Id',
                  'Hardware_Templates'
                ],
                description: '1'
              }              
            },
            dependencies: {},
            required: []
          }
        },
        dependencies: {},
        required: []
      }
    },
    dependencies: {},
    required: [
      'PlatformConfigHdr',
      'PlatformConfigBody'
    ]
  }

const latestConfig = {
  "id": "631983c427ed3bd0564189db",
  "comment": "wrhheb",
  "status": "DRAFT",
  "generatedBy": "vishal dhore",
  "generatedTimestamp": "2022-09-08T05:55:16.447Z",
  "modifiedBy": "vishal dhore",
  "modifiedAt": "2022-09-08T05:55:58.427Z",
  "HeadEndTemplateHdr": {
    "name": "IFE-NXT-NC_1-CS_2",
    "version": "egg"
  },
  "HeadEndTemplateMetaData": {
    "system": "NXT",
    "templateType": "IFE",
    "aircraftLayout": [
      "LRWB",
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
        "name": "NC",
        "description": "",
        "type": 370,
        "subType": 2,
        "sortOrder": 1
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
}

const latestSchema  = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "comment": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "generatedBy": {
      "type": "string"
    },
    "generatedTimestamp": {
      "type": "string"
    },
    "modifiedBy": {
      "type": "string"
    },
    "modifiedAt": {
      "type": "string"
    },
    "HeadEndTemplateHdr": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "version": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "version"
      ]
    },
    "HeadEndTemplateMetaData": {
      "type": "object",
      "properties": {
        "system": {
          "type": "string"
        },
        "templateType": {
          "type": "string"
        },
        "aircraftLayout": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "aircraftType": {
          "type": "array",
          "items": [
            {
              "type": "string"
            }
          ]
        },
        "isSystemName": {
          "type": "boolean"
        }
      },
      "required": [
        "system",
        "templateType",
        "aircraftLayout",
        "aircraftType",
        "isSystemName"
      ]
    },
    "HeadEndTemplateBody": {
      "type": "object",
      "properties": {
        "lruSet": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "type": {
                  "type": "integer"
                },
                "subType": {
                  "type": "integer"
                },
                "sortOrder": {
                  "type": "integer"
                }
              },
              "required": [
                "name",
                "description",
                "type",
                "subType",
                "sortOrder"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "type": {
                  "type": "integer"
                },
                "subType": {
                  "type": "integer"
                },
                "sortOrder": {
                  "type": "integer"
                }
              },
              "required": [
                "name",
                "description",
                "type",
                "subType",
                "sortOrder"
              ]
            },
            {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "type": {
                  "type": "integer"
                },
                "subType": {
                  "type": "integer"
                },
                "sortOrder": {
                  "type": "integer"
                }
              },
              "required": [
                "name",
                "description",
                "type",
                "subType",
                "sortOrder"
              ]
            }
          ]
        }
      },
      "required": [
        "lruSet"
      ]
    }
  },
  "required": [
    "id",
    "comment",
    "status",
    "generatedBy",
    "generatedTimestamp",
    "modifiedBy",
    "modifiedAt",
    "HeadEndTemplateHdr",
    "HeadEndTemplateMetaData",
    "HeadEndTemplateBody"
  ]
}

export { mySchema1, mySchema2, json1, json2, json3, mySchema3, myBaseSchema, json4, myBaseSchemaLatest, mySchema5,myBaseUiSchema ,latestConfig,latestSchema}




