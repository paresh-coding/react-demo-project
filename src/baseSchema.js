// import { baseSchema } from "./dataConfig"

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



export default myBaseSchema