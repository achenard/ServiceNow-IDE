import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    app_system_1: {
                        table: 'x_snc_hrc_change_2_application_system'
                        id: '31e70751c9884dc48481264d4d2e820b'
                    }
                    app_system_2: {
                        table: 'x_snc_hrc_change_2_application_system'
                        id: '748ca755bf36467b87a4a448b0bbde7b'
                    }
                    app_system_3: {
                        table: 'x_snc_hrc_change_2_application_system'
                        id: '15e99b87635a465e9abdd72b5022a620'
                    }
                    app_system_4: {
                        table: 'x_snc_hrc_change_2_application_system'
                        id: '14bb0bf6b8f949f2a96af83adad2e5c1'
                    }
                    app_system_5: {
                        table: 'x_snc_hrc_change_2_application_system'
                        id: 'a20a01e8073d422a9831106091217a14'
                    }
                    app_system_create_acl: {
                        table: 'sys_security_acl'
                        id: 'ea96f21e915944678e2a695f814e4bdc'
                    }
                    app_system_delete_acl: {
                        table: 'sys_security_acl'
                        id: '0aaba6457f964376b14c36194c9a6a0b'
                    }
                    app_system_read_acl: {
                        table: 'sys_security_acl'
                        id: 'db4cc277fda04404ad7ef09acfd21ae3'
                    }
                    app_system_write_acl: {
                        table: 'sys_security_acl'
                        id: '713a14d2cde144c891c42115b0ad5270'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '7ea7890afd5e4495b10f4c466e0f5864'
                    }
                    briefing_1: {
                        table: 'x_snc_hrc_change_2_type_of_briefing'
                        id: '70226f260a5646efa6dae4cc36206ff3'
                    }
                    briefing_2: {
                        table: 'x_snc_hrc_change_2_type_of_briefing'
                        id: '567046a2353248189c5c4101653d16ca'
                    }
                    briefing_3: {
                        table: 'x_snc_hrc_change_2_type_of_briefing'
                        id: '91518f3042d249f0b60568b5785402e5'
                    }
                    briefing_create_acl: {
                        table: 'sys_security_acl'
                        id: '1aae904cbcce46ee973ea6bf9017f4b5'
                    }
                    briefing_delete_acl: {
                        table: 'sys_security_acl'
                        id: '0f19cac5075146f1baf59d97768849de'
                    }
                    briefing_read_acl: {
                        table: 'sys_security_acl'
                        id: 'bcdd12532ab54d2896573072b8081a3e'
                    }
                    briefing_write_acl: {
                        table: 'sys_security_acl'
                        id: '3a1e8bf0dccb4fbba56b566c0d0dc6f5'
                    }
                    'crma-dashboard': {
                        table: 'sys_ui_page'
                        id: 'd11f740801b048a09b1eccdea6b47676'
                    }
                    drrb_1: {
                        table: 'x_snc_hrc_change_2_drrb'
                        id: '2c0dff9890e64f38a3ce6fc2225d57d5'
                    }
                    drrb_2: {
                        table: 'x_snc_hrc_change_2_drrb'
                        id: '111e6f649d534c07ab23b1a13c6cebcc'
                    }
                    drrb_3: {
                        table: 'x_snc_hrc_change_2_drrb'
                        id: 'c0e0617a9f864c0dbed6d4f26d3b0fea'
                    }
                    drrb_auto_assign_submitter: {
                        table: 'sys_script'
                        id: '6391ee23fefc4a5d92d16c6946d4de82'
                    }
                    drrb_create_acl: {
                        table: 'sys_security_acl'
                        id: '39080aec4ca2464fbf15dda1a37c6699'
                    }
                    drrb_delete_acl: {
                        table: 'sys_security_acl'
                        id: '51a367682bf4458f8d5d78b3826e8b5e'
                    }
                    drrb_priority_calculator: {
                        table: 'sys_script'
                        id: '8a76ac8387b54f8f83b70a528b687bd1'
                    }
                    drrb_read_acl: {
                        table: 'sys_security_acl'
                        id: '589b5ff168c0450da43e08099b7c3d64'
                    }
                    drrb_state_transition: {
                        table: 'sys_script'
                        id: '23925c2720ad403d97b00ad41ec0409d'
                    }
                    drrb_submit_for_approval: {
                        table: 'sys_script'
                        id: '19ea10e66c8c4c4f9c26f0809b42361f'
                    }
                    drrb_validation: {
                        table: 'sys_script'
                        id: '7b8a526a53c241549198c2c823eedc37'
                    }
                    drrb_write_acl: {
                        table: 'sys_security_acl'
                        id: '7dbc6ef1b201432a8fbdc44b6f568a66'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '037ed7f1e74d409f9ae49589438e9a50'
                    }
                    'src_server_drrb-workflow_js': {
                        table: 'sys_module'
                        id: '213ece1dac6e4330bc4e57827b173095'
                    }
                    'x_snc_hrc_change_2/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'a5e9bb7c3a724f1998f63a5a6255e9c9'
                    }
                    'x_snc_hrc_change_2/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '0b7250a25e324524987168aba74816b0'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '007049200ccf4e1cbca31b0d96ba4a9e'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'it_ops_review'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '018182805ff54ef3a79e00b5edb5dee2'
                        key: {
                            role: {
                                id: '8c3947e58def4916b16c6b7729e1a08a'
                                key: {
                                    name: 'x_snc_hrc_change_2.requesting_functional'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02a4ab73e53a45058b48c6290c0a1955'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'functional_director'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '0616493d0158402db6016c77cc68d58d'
                        key: {
                            role: {
                                id: 'd9d4e2df92b046eb859ea2c04953a686'
                                key: {
                                    name: 'x_snc_hrc_change_2.directors_staff'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '08d736060def43a7912a5423a08954ec'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'active'
                            value: 'true'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '09fe0da1b73546ffa7ecf09a4fea8122'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0a0f1e07c6de4db68bffb0227f462d34'
                        key: {
                            sys_security_acl: 'ea96f21e915944678e2a695f814e4bdc'
                            sys_user_role: {
                                id: '688fe1ffcc8546f486fa3e00a4484ef1'
                                key: {
                                    name: 'x_snc_hrc_change_2.it_operations'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a2ad1b796584e3e8a9a2f1ed3f1e285'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a64668b089d4668b50c89a9d5848744'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'submitter'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0db8680a16c349c8a9bef76185de88f6'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'opened_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0dbe944393d04c8db52a779928d5ab80'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'name'
                            value: 'epmdtk'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '0f41de21c55746b39cc50db8b2647ea3'
                        key: {
                            role: {
                                id: '66cebecb27f44836a1116a6e70093d4f'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_id'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11f79b9df4b646228a794f53a26c32ab'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '15358b0b44994fb3884184c5cd1c909e'
                        key: {
                            sys_security_acl: '39080aec4ca2464fbf15dda1a37c6699'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '15e9df034c3944f5a44425732a473e97'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: 'c1a983ac63d2417ba134c626b8879922'
                                key: {
                                    name: 'x_snc_hrc_change_2.g6_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '164f4301437b4d80855881cf7318ed17'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: 'c1a983ac63d2417ba134c626b8879922'
                                key: {
                                    name: 'x_snc_hrc_change_2.g6_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '178018417fc74f87a82a49a5b5e36c88'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'active'
                            value: 'true'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1aca428dd4794b649bcf5c14bf905057'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: '35e60adede1e4a018326003fbaf6d1d5'
                                key: {
                                    name: 'x_snc_hrc_change_2.vat_member'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1aebc0df4ad64705a20380c834a249d6'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'opened'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1c97a0d4bc42475dab8aa4befda11dc1'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'type_of_briefing'
                            value: 'decision'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '1da8876c791245fab6af39c2d7ef7401'
                        key: {
                            role: {
                                id: 'c1a983ac63d2417ba134c626b8879922'
                                key: {
                                    name: 'x_snc_hrc_change_2.g6_user'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e732cda924847909b6ead401b98df54'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                            value: 'ad'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1f47876f121b47e68374cda129b3f084'
                        key: {
                            sys_security_acl: '39080aec4ca2464fbf15dda1a37c6699'
                            sys_user_role: {
                                id: '8c3947e58def4916b16c6b7729e1a08a'
                                key: {
                                    name: 'x_snc_hrc_change_2.requesting_functional'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '235eade479f74fa7951c21a3c78176f0'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: '44e843491a894afebd3c1c969681833d'
                                key: {
                                    name: 'x_snc_hrc_change_2.functional_director'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '23c327b34f474eb5809a98b18b28a9d6'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'division_assignment'
                            value: 'admd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25bc412724b84cc29fcc562f8b7aee2c'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2613f386ce8f4818b7651b3b0e7eec33'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28545c0cfafc4d1c8c475557667f1d96'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28e87f93c01241a29e24cc62091b847c'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2afb7bb2a5e04bf7aff52e2c1829e87a'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'type_of_briefing'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '2e36806cf1ad458c9580a507ed317c77'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: '66cebecb27f44836a1116a6e70093d4f'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_id'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '30875bacc1f3496e8adac40882f4da9b'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: 'd9d4e2df92b046eb859ea2c04953a686'
                                key: {
                                    name: 'x_snc_hrc_change_2.directors_staff'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3147379e147a4ef2beb0fb7d605fc310'
                        key: {
                            sys_security_acl: '3a1e8bf0dccb4fbba56b566c0d0dc6f5'
                            sys_user_role: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '33ecc19729fe43979378495d3badbe53'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: '688fe1ffcc8546f486fa3e00a4484ef1'
                                key: {
                                    name: 'x_snc_hrc_change_2.it_operations'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '35e60adede1e4a018326003fbaf6d1d5'
                        key: {
                            name: 'x_snc_hrc_change_2.vat_member'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '37a4b7652039466fb4ac1c65c59d9340'
                        key: {
                            sys_security_acl: '589b5ff168c0450da43e08099b7c3d64'
                            sys_user_role: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3805ecc2c281483d9b48a01b53a81a44'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '390b73ec657549eb8200f4d67294ef8a'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b3ccd3678a84779bd063f070bbb7238'
                        key: {
                            sys_security_acl: '1aae904cbcce46ee973ea6bf9017f4b5'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3bbd1aa77aad421f803946f769c7b48f'
                        key: {
                            sys_security_acl: '589b5ff168c0450da43e08099b7c3d64'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3e2dbaed4c9244ae9782d6551ed5b3cb'
                        key: {
                            sys_security_acl: 'ea96f21e915944678e2a695f814e4bdc'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e4f417b82a44ebc882f4995e3c8a407'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'submitter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e9fd2f6bd584636870df2f71c7c2fc4'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'branch'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '446fc6795acb4175a4009fefd1914acb'
                        key: {
                            sys_security_acl: '1aae904cbcce46ee973ea6bf9017f4b5'
                            sys_user_role: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '44e843491a894afebd3c1c969681833d'
                        key: {
                            name: 'x_snc_hrc_change_2.functional_director'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '47c549e2ceb94ba18edd468a2b999571'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                            value: 'emod'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '48161f27bbbb4a0ea94b969c58b28b6d'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: '66cebecb27f44836a1116a6e70093d4f'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_id'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '49a5b6ddde0a44a9ad96ae3e55f28d9a'
                        key: {
                            category: 'x_snc_hrc_change_2_drrb'
                            prefix: 'DRRB'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49fe629d3e8a4f4dad488863a0692ccc'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'functional_director'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b87dea1eaa044fd8065842bbb4558e5'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'name'
                            value: 'av_knox_hrc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d26ed68e3424e12b41954b000cfa033'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f51aa6fb0454234b01b7cbe3167d514'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '526e3fee21374122a632164ddf259e66'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'division_assignment'
                            value: 'g6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '536fae7a744444b7a4658e9469d408e1'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cd147dd88c7410a99579dc6c72eb862'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5df2e4f4c4ad4066b2e46462475d5126'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5e774dae91f84f09978d5625bd8e67a7'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'in_review'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5e977bbd5c7c4049a87e102a976ac4bd'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f1c3c920a1740d18a3aeac129a989ea'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'division_assignment'
                            value: 'gpd'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5fee8f98fbe6410ba3a955f560cc720f'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'type_of_briefing'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '60072891c92c4410b594932d75bf724e'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '607c6cfe873741b4bc65c138ec61459f'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6191527e997c4ecd9971cd7e78cdde51'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'tasked'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '65288d9d818a4c989e335e1d0f2634b0'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: 'f2f540a7be464bbdb8fec3af1ed628cf'
                                key: {
                                    name: 'x_snc_hrc_change_2.g3_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6597a1aba1f049bdb9f946ed895c9585'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'division_assignment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '666bacc530724f4bb4736ddaf3ced5ca'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'name'
                            value: 'dcips'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '66cebecb27f44836a1116a6e70093d4f'
                        key: {
                            name: 'x_snc_hrc_change_2.emod_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '67430ff143124789981bc69d7fc2f407'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                            value: 'tagd'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '688fe1ffcc8546f486fa3e00a4484ef1'
                        key: {
                            name: 'x_snc_hrc_change_2.it_operations'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68a2f7d1f4354d07a97db0987604acfc'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '68bb7d971bc248d4a387809257abbe09'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69383a3e92444699b58e101f90ffcc02'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'division_assignment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '693bc1446a094dcc9bebc58a71b4bc4e'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '698856b3bd7b45a4a60cde5596f5f842'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: '44e843491a894afebd3c1c969681833d'
                                key: {
                                    name: 'x_snc_hrc_change_2.functional_director'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6ed28796d60240a880f61c503b480f91'
                        key: {
                            sys_security_acl: 'bcdd12532ab54d2896573072b8081a3e'
                            sys_user_role: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70e754cbfdda4355b22fc5550c1b91ff'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '73f06ae024c945e9aad4e2347bafce55'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'name'
                            value: 'edes'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '775567c00aa94a72ba0c396a3c2cdb17'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: 'd9d4e2df92b046eb859ea2c04953a686'
                                key: {
                                    name: 'x_snc_hrc_change_2.directors_staff'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '79275de72ca044eaa0844eff1eb56af6'
                        key: {
                            sys_security_acl: '0f19cac5075146f1baf59d97768849de'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7a4afa58cc6a4003a39ea6eba5141368'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7a55c02c4de54230973fbeb3b7128719'
                        key: {
                            sys_security_acl: '713a14d2cde144c891c42115b0ad5270'
                            sys_user_role: {
                                id: '688fe1ffcc8546f486fa3e00a4484ef1'
                                key: {
                                    name: 'x_snc_hrc_change_2.it_operations'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7c67d3e7b0524a0a8d275c8dfd38a927'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e2a537210f048b0b063046f2c7998ec'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'type_of_briefing'
                            value: 'guidance'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '7e54bfff80cf4fcc8837caafdc297ecf'
                        key: {
                            role: {
                                id: 'd40c1eb9c7034ef3930b203f6e288101'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_admd'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7e9ef5797bfb4d4a9bb8272f77bf48bb'
                        key: {
                            sys_security_acl: '0f19cac5075146f1baf59d97768849de'
                            sys_user_role: {
                                id: '44e843491a894afebd3c1c969681833d'
                                key: {
                                    name: 'x_snc_hrc_change_2.functional_director'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7fcc470dee4f49d78ed9fc1ed092c359'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'application_system'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '80899b4d7a134e7397b9b1a907fe44ee'
                        key: {
                            sys_security_acl: '713a14d2cde144c891c42115b0ad5270'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '80a6015711444f11a5ffe2dbca98d444'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '8354e34ccc4346c6ab80892646af7414'
                        key: {
                            category: 'x_snc_hrc_change_2_type_of_briefing'
                            prefix: 'TOB'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '83cb1d537f0a4e609375fd6e20fdfa00'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'division_assignment'
                            value: 'id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '856651c5af0a4bb2a45524b2245d0718'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'updated'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '865a424daf0245299d5c309cbed7e381'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'state'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '878da0901d274eb08fb9dddb3d401acc'
                        key: {
                            role: {
                                id: 'd059d4b6fd98459c96f3a2afcf5fdca7'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_gpd'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '8980153d47f843d79301af88f86af684'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: 'd059d4b6fd98459c96f3a2afcf5fdca7'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_gpd'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '89e9348748ef4bf180e2ef1012bfeeb6'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '8c3947e58def4916b16c6b7729e1a08a'
                        key: {
                            name: 'x_snc_hrc_change_2.requesting_functional'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8c721114cdc141c0ade3378c6d3090c7'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d14516fe8a744618d78869a1f3c5df0'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'pre_approval'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d83c16260a34b8782a83d26f8eca605'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'application_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '8edcae2330e54dc0abde0a3af7d10605'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: 'd40c1eb9c7034ef3930b203f6e288101'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_admd'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8f61d977e05d43b1b382b2d9dd18d26b'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: 'd40c1eb9c7034ef3930b203f6e288101'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_admd'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '935aebfd68de409194e54cdda0705415'
                        key: {
                            role: {
                                id: 'f2f540a7be464bbdb8fec3af1ed628cf'
                                key: {
                                    name: 'x_snc_hrc_change_2.g3_user'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '942844a2df4f48e782a21be260895c26'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9632c2d690684c588384e24780ae4ada'
                        key: {
                            sys_security_acl: '0aaba6457f964376b14c36194c9a6a0b'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96466e5c035a4e19b22e48559d792e2a'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '9968517194a34cb99898679831b0ad93'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: '35e60adede1e4a018326003fbaf6d1d5'
                                key: {
                                    name: 'x_snc_hrc_change_2.vat_member'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9dd22e46b91c483c9b431426056f7121'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'division_assignment'
                            value: 'g3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a12af182180546109a37d025755c121d'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a595335433fe4b98bbc6a509e3d6805e'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: 'd059d4b6fd98459c96f3a2afcf5fdca7'
                                key: {
                                    name: 'x_snc_hrc_change_2.emod_gpd'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a617a920a9ab470da9bd8465d5cc1b7b'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'active'
                            value: 'false'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a62ab74140594e7882c6377c15b26c79'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8c24ffd843b4ed0bfb06df6ff054fe8'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a91d1f67b57c40d993f94b210ee8ecc1'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aae444fa2e784e78942129688c565a4c'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab8f429003a042468813628740e592b0'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b1ff5b05d49a4b0cbc6a46eb6bf63304'
                        key: {
                            sys_security_acl: 'db4cc277fda04404ad7ef09acfd21ae3'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b32fdf07972749609dde5931dbc99b48'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'b5206bbdb0aa4c1d869a1c377a4789d8'
                        key: {
                            role: {
                                id: '44e843491a894afebd3c1c969681833d'
                                key: {
                                    name: 'x_snc_hrc_change_2.functional_director'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b5bc9b7c0c9e417ab20f869eb15a55e1'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'opened'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b66d5a340d32456f8a2442c856ec67f3'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'active'
                            value: 'false'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b84f92a1caad4eafb406c05710b9a9bd'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                            value: 'staff'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b95d4ed397714a70af3acfed05108799'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bb4bec75217e4c1b97dd8d40439c0c8e'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bba7b109be604421b840850e360b8cdd'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd83eed5b8a1488b95caba140f236cb0'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c14a1abdb9d340cbb9583c75bfc9e3f7'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c1a983ac63d2417ba134c626b8879922'
                        key: {
                            name: 'x_snc_hrc_change_2.g6_user'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3b81437b9ef489fa9e834baf3ad021c'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'state'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3d834fcf09e40f6b25691e925e096b1'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5bcb60e922c4cdda24327ac27810141'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5c1833ca6fd4267b9d707e417bb8350'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'branch'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c74e29774f984df786900565fdd982a4'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c7b65ce535a1475b95b3b70cb98d59aa'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c958925809d94962be32a63ca88d23af'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb51486139ff42dbb398032f73025341'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'updated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cba723d5cd2240b28ee79b60400b7868'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ce258d8132644d93857338ad30485062'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                            value: 'mprd'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd023cc64977741bebca6e20b40a197c9'
                        key: {
                            sys_security_acl: 'bcdd12532ab54d2896573072b8081a3e'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd059d4b6fd98459c96f3a2afcf5fdca7'
                        key: {
                            name: 'x_snc_hrc_change_2.emod_gpd'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'd080511777d44a238665032621d69f66'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: '8c3947e58def4916b16c6b7729e1a08a'
                                key: {
                                    name: 'x_snc_hrc_change_2.requesting_functional'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd40c1eb9c7034ef3930b203f6e288101'
                        key: {
                            name: 'x_snc_hrc_change_2.emod_admd'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd4f0765187314660be6fc6ff2f27effe'
                        key: {
                            name: 'x_snc_hrc_change_2.crma_user'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4f9457ded8445b29924f8618bb5bd01'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'name'
                            value: 'cui_hrc'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd60ab562fa41444faf9d25e88b3b5ab0'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6db174ad18e4c5186a463a7eff6fdec'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd9d4e2df92b046eb859ea2c04953a686'
                        key: {
                            name: 'x_snc_hrc_change_2.directors_staff'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dbb8f92c42334818a64ba4acf3cee75a'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'dc3b25ed33a3470e81645f9c610447dc'
                        key: {
                            name: 'x_snc_hrc_change_2.crma_admin'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'dc8b65884492484a81340d1f7ac68325'
                        key: {
                            role: {
                                id: '35e60adede1e4a018326003fbaf6d1d5'
                                key: {
                                    name: 'x_snc_hrc_change_2.vat_member'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de036c47213b4ab19859b5cf3b146c6c'
                        key: {
                            name: 'x_snc_hrc_change_2_application_system'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'deba6d671c1343b5a67e1ecf5ae31991'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'directorate'
                            value: 'rpmd'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e11e9e135d634395bbffa1a268bcf3da'
                        key: {
                            sys_security_acl: 'db4cc277fda04404ad7ef09acfd21ae3'
                            sys_user_role: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e239890dc77c467b8d99ccc5f48a6fa2'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'type_of_briefing'
                            value: 'information'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2734aaefa3241be9f53709fedbe03e1'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3758ecfa2f54d40ac23aa2791c9f3a2'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e3b035b054534134bad4a18582f4031e'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e54546350d0f42c2add4edaf71df4a4a'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'vat_review'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e571daaf5ad441d3a0742e7ffddc3686'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'state'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e798978084c14088a8302c586edbc6ad'
                        key: {
                            sys_security_acl: '3a1e8bf0dccb4fbba56b566c0d0dc6f5'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'e9e9eee29c17478c9e04189459dbc5f5'
                        key: {
                            role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                            contains: {
                                id: '688fe1ffcc8546f486fa3e00a4484ef1'
                                key: {
                                    name: 'x_snc_hrc_change_2.it_operations'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebf90c20363d4420b6519a0c6e4624f1'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'opened_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f2f540a7be464bbdb8fec3af1ed628cf'
                        key: {
                            name: 'x_snc_hrc_change_2.g3_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f31f157b51f944939b17a5b7c41115ef'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f595b147df5143a0b764d9fd8203200b'
                        key: {
                            sys_security_acl: '7dbc6ef1b201432a8fbdc44b6f568a66'
                            sys_user_role: {
                                id: 'f2f540a7be464bbdb8fec3af1ed628cf'
                                key: {
                                    name: 'x_snc_hrc_change_2.g3_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f619698cea824db19268bdfb810ff97a'
                        key: {
                            sys_security_acl: '51a367682bf4458f8d5d78b3826e8b5e'
                            sys_user_role: {
                                id: 'dc3b25ed33a3470e81645f9c610447dc'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f674218ac19d4bae91ba9b9432f64347'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'state'
                            value: 'voting'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f74c1b51fda34899aa3adc0cb9398145'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'state'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb5244cc3b7347fc842a3ecdf1360e93'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'type_of_briefing'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'fba366d9445a488abd7daa096cfc90ab'
                        key: {
                            role: {
                                id: '688fe1ffcc8546f486fa3e00a4484ef1'
                                key: {
                                    name: 'x_snc_hrc_change_2.it_operations'
                                }
                            }
                            contains: {
                                id: 'd4f0765187314660be6fc6ff2f27effe'
                                key: {
                                    name: 'x_snc_hrc_change_2.crma_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc6424d1da83458e8cb0e5b1828115e7'
                        key: {
                            name: 'x_snc_hrc_change_2_type_of_briefing'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fdd22c3277794ed7a996b1fd13388aef'
                        key: {
                            name: 'x_snc_hrc_change_2_drrb'
                            element: 'division_assignment'
                        }
                    },
                ]
            }
        }
    }
}
