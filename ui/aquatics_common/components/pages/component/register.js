import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, Modal, Input, Select, Button, Checkbox, notification } from 'antd'
import _ from 'lodash'

import { createLeadCustomer } from '../../../actions/api'

import styles from '../../styles/component/register.scss'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

const confirm = Modal.confirm
const field_colon_label = false

class Register extends Component {

    render() {
        const { masters: { schools, classes }, data, handleClose, form } = this.props 
        const { getFieldValue, getFieldDecorator } = form

        let master_schools = (schools && schools.data && schools.data.length > 0) ? schools.data : []
        let master_classes = (classes && classes.data && classes.data.length > 0) ? classes.data : []

        let school_selected = getFieldValue('School')
        let session_class = (school_selected && school_selected !== '') ? _.filter(master_classes, { School_ID: school_selected }) : []
      
        return (
            <Modal
                className={styles['register']}
                title={<div className={styles['title']}>Register with us</div>}
                visible={data.isOpen}
                maskClosable={false}
                onOk={null}
                footer={null}
                onCancel={handleClose}
                destroyOnClose={true}
            >
                <Form onSubmit={this.handleSubmit} className={styles['form_container']}>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Parent / Guardian First Name<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ParentFirstName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Parent / Guardian Last Name<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ParentLastName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Mobile Number<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('Mobile', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Email Address<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('Email', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Child’s First Name<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ChildFirstName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Child’s Last Name<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ChildLastName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Name of school<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('School', {})
                                    (
                                        <Select>
                                            <Option key={`SHL0`} value=""></Option>
                                            {
                                                _.map(master_schools, (data, i) => {
                                                    return (<Option key={`SHL${i+1}`} value={data.School_ID}>{data.School_Name}</Option>)
                                                })
                                            }
                                        </Select>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Desired Class</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('SessionClass', {})
                                    (
                                        <Select>
                                            <Option key={`SCS0`} value=""></Option>
                                            {
                                                _.map(session_class, (data, i) => {
                                                    return (<Option key={`SCS${i+1}`} value={data.Classes_ID}>{data.Classes_Name}</Option>)
                                                })
                                            }
                                        </Select>
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={24}>
                            <FormItem label={<div className={styles['form_label']}>Additional comments if any:</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('Comments', {})
                                    (<TextArea rows={3} />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={18}>
                            <FormItem className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ReceiveOffers', {})
                                    (
                                        <Checkbox>
                                            <span className={styles['form_label']}>Receive exclusive offers &amp; updates</span>
                                        </Checkbox>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={6} className={styles['tr']} style={{ paddingTop: '7px' }}>
                            <Button type="primary" htmlType="submit">Register</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { form: { validateFields }, CREATE_LEAD_DATA } = this.props

        validateFields((err, fieldData) => {
            if(!err) {

                let dataRequest = {
                    parent_firstname: (fieldData.ParentFirstName && !_.isEmpty(fieldData.ParentFirstName)) ? fieldData.ParentFirstName : null,
                    parent_lastname:  (fieldData.ParentLastName && !_.isEmpty(fieldData.ParentLastName)) ? fieldData.ParentLastName : null,
                    mobile: (fieldData.Mobile) ? fieldData.Mobile : null,
                    email: (fieldData.Email && !_.isEmpty(fieldData.Email)) ? fieldData.Email : null,
                    ChildFirstName:  (fieldData.ChildFirstName && !_.isEmpty(fieldData.ChildFirstName)) ? fieldData.ChildFirstName : null,
                    ChildLastName:  (fieldData.ChildLastName && !_.isEmpty(fieldData.ChildLastName)) ? fieldData.ChildLastName : null,
                    school_id: (fieldData.School) ? fieldData.School : null,
                    classes_id: (fieldData.SessionClass) ? fieldData.SessionClass : null,
                    note:  (fieldData.Comments && !_.isEmpty(fieldData.Comments)) ? fieldData.Comments : null,
                    is_received_off:  (fieldData.ReceiveOffers) ? 'Y' : 'N'
                }
                
                CREATE_LEAD_DATA(dataRequest)

                // if(!fieldData.customer_name) {
                //     this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { customer_name: 'error' })  })
                //     this.handleNotify('error', title_notify, 'โปรดกรอกชื่อของลูกค้า')
                //     return false
                // }


                // let handleUpdateCustomer = this.handleUpdateDataSubmit
                // confirm({
                //     title: 'กรุณายืนยันการบันทึกข้อมูล',
                //     content: 'โปรดตรวจสอบข้อมูลให้ถูกก่อนยืนยันการบันทึกข้อมูล กรุณาข้อมูลถูกต้อง คลิก OK หรือ Cancel เพื่อยกเลิก',
                //     onOk() { handleUpdateCustomer(fieldData) },
                //     onCancel() {},
                // })
                
            }

        })
    }

    handleNotify = (noti_type, str_msg, str_content) => {
        let notify_type = null
        let msg_title = null
        
        if(str_msg && str_msg !== '') msg_title = str_msg
        else msg_title = 'Notice information'

        if(str_msg && str_msg !== '') notify_type = noti_type
        else notify_type = 'success'

        notification[notify_type]
        ({
            message: msg_title,
            description: str_content
        })
    }

}

const registerForm = Form.create()(Register)
export default connect(
    (state) => ({
        is_create: state.CUSTOMER_CREATED
    }),
    {
        CREATE_LEAD_DATA: createLeadCustomer
    }
)(registerForm)