import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha"
import { Row, Col, Form, Modal, Input, Select, Button, Checkbox, notification } from 'antd'
import { site_key } from '../../../config'
import _ from 'lodash'

import { createLeadCustomer } from '../../../actions/api'

import styles from '../../styles/component/register.scss'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

const confirm = Modal.confirm
const field_colon_label = false

class Register extends Component {

    state = {
        pending_created: false,
        form_validate: {
            parent_firstname: '',
            parent_lastname: '',
            mobile: '',
            email: '',
            child_firstname: '',
            child_lastname: '',
            school_id: '',
            classes_id: '',
            note: '',
            is_agreement: ''
        }
    }

    componentWillReceiveProps(props) {
        if(props) {
            if(this.state.pending_created) {
                if(props.is_created) {
                    props.handleClose()
                }
                this.setState({ pending_created: false })
            }

        }
    }

    render() {
        const { masters: { schools, classes }, data, handleClose, form } = this.props 
        const { getFieldValue, getFieldDecorator } = form
        const { form_validate } = this.state

        let master_schools = (schools && schools.data && schools.data.length > 0) ? schools.data : []
        let master_classes = (classes && classes.data && classes.data.length > 0) ? classes.data : []

        let school_selected = getFieldValue('School')
        let session_class = (school_selected && school_selected !== '') ? _.filter(master_classes, { School_ID: school_selected }) : []
      
        const grecaptchaObject = window.grecaptcha

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
                            <FormItem label={<div className={styles['form_label']}>Parent / Guardian First Name<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label} validateStatus={form_validate.parent_firstname} hasFeedback>
                                {
                                    getFieldDecorator('ParentFirstName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Parent / Guardian Last Name<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label} validateStatus={form_validate.parent_lastname} hasFeedback>
                                {
                                    getFieldDecorator('ParentLastName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Mobile Number<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label} validateStatus={form_validate.mobile} hasFeedback>
                                {
                                    getFieldDecorator('Mobile', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Email Address<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label}  validateStatus={form_validate.email} hasFeedback>
                                {
                                    getFieldDecorator('Email', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Child’s First Name<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label} validateStatus={form_validate.child_firstname} hasFeedback>
                                {
                                    getFieldDecorator('ChildFirstName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Child’s Last Name<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label} validateStatus={form_validate.child_lastname} hasFeedback>
                                {
                                    getFieldDecorator('ChildLastName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Name of school<span className={styles['important']}>*</span></div>} className={styles['form_item']} colon={field_colon_label} validateStatus={form_validate.school_id} hasFeedback>
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
                            <FormItem label={<div className={styles['form_label']}>Additional comments if any:</div>} className={styles['form_item2']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('Comments', {})
                                    (<TextArea rows={2} />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={24}> 
                            <FormItem className={styles['form_item2']} colon={field_colon_label} validateStatus={form_validate.is_agreement} hasFeedback>
                                {
                                    getFieldDecorator('IsAgreement', {})
                                    (
                                        <Checkbox>
                                            <span className={styles['form_label']}>I have read the <a href="" target="">agreement</a></span>
                                        </Checkbox>
                                    )
                                }
                            </FormItem>
                        
                        </Col>
                        <Col span={24}>
                            <FormItem className={styles['form_item2']} colon={field_colon_label}>
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
                        <Col span={24}>
                            <ReCAPTCHA
                                ref={(r) => this.recaptcha = r}
                                sitekey={site_key}
                                grecaptcha={grecaptchaObject}
                            />
                        </Col>
                        <Col span={24} className={styles['tc']} style={{ paddingTop: '15px' }}>
                            <Button id="btn_submit" type="primary" htmlType="submit" style={{ width: '45%' }}>Register</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { form: { validateFields } } = this.props
        const { grecaptcha } = this.recaptcha.props

        const title_notify = 'Notification'

        validateFields((err, fieldData) => {
            if(!err) {
                
                let captcha_resp = grecaptcha.getResponse()
                let dataRequest = {
                    parent_firstname: (fieldData.ParentFirstName && !_.isEmpty(fieldData.ParentFirstName)) ? fieldData.ParentFirstName : null,
                    parent_lastname:  (fieldData.ParentLastName && !_.isEmpty(fieldData.ParentLastName)) ? fieldData.ParentLastName : null,
                    mobile: (fieldData.Mobile) ? fieldData.Mobile : null,
                    email: (fieldData.Email && !_.isEmpty(fieldData.Email)) ? fieldData.Email : null,
                    child_firstname:  (fieldData.ChildFirstName && !_.isEmpty(fieldData.ChildFirstName)) ? fieldData.ChildFirstName : null,
                    child_lastname:  (fieldData.ChildLastName && !_.isEmpty(fieldData.ChildLastName)) ? fieldData.ChildLastName : null,
                    school_id: (fieldData.School) ? fieldData.School : null,
                    classes_id: (fieldData.SessionClass) ? fieldData.SessionClass : null,
                    note: (fieldData.Comments && !_.isEmpty(fieldData.Comments)) ? fieldData.Comments : null,
                    is_agreement:  (fieldData.IsAgreement) ? 'Y' : 'N',
                    is_received_off:  (fieldData.ReceiveOffers) ? 'Y' : 'N'
                }
            
                if(_.isEmpty(dataRequest.parent_firstname)) {
                    this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { parent_firstname: 'error' })  })
                    this.handleNotify('error', title_notify, 'Please enter your parent first name')
                    return false
                }

                if(_.isEmpty(dataRequest.parent_lastname)) {
                    this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { parent_lastname: 'error' })  })
                    this.handleNotify('error', title_notify, 'Please enter your parent last name')
                    return false
                }
                
                if(_.isEmpty(dataRequest.mobile)) {
                    this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { mobile: 'error' })  })
                    this.handleNotify('error', title_notify, 'Please enter your mobile')
                    return false
                }

                if(_.isEmpty(dataRequest.email)) {
                    this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { email: 'error' })  })
                    this.handleNotify('error', title_notify, 'Please enter your email')
                    return false
                }

                if(_.isEmpty(dataRequest.child_firstname)) {
                    this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { child_firstname: 'error' })  })
                    this.handleNotify('error', title_notify, 'Please enter your child first name')
                    return false
                }

                if(_.isEmpty(dataRequest.child_lastname)) {
                    this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { child_lastname: 'error' })  })
                    this.handleNotify('error', title_notify, 'Please enter your child last name')
                    return false
                }
                
                if(_.isEmpty(dataRequest.school_id)) {
                    this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { school_id: 'error' })  })
                    this.handleNotify('error', title_notify, 'Please enter your school name')
                    return false
                }

                if(dataRequest.is_agreement == 'N') {
                    this.setState({ form_validate: _.assignIn({}, this.state.form_validate, { is_agreement: 'error' })  })
                    this.handleNotify('error', title_notify, 'Please confirm the agreement')
                    return false
                }

                if(_.isEmpty(captcha_resp)) {
                    this.handleNotify('error', title_notify, 'Please confirm humanity')
                    return false
                }

                let initialSubmit = this.initialSubmit
                confirm({
                    title: 'Please confirm registration.',
                    content: 'Please check the data before confirming registration. If the data is correct, please click OK or Cancel to cancel the registration.',
                    onOk() { initialSubmit(dataRequest) },
                    onCancel() {},
                })
                
            }

        })
    }

    initialSubmit = (dataRequest) => {
        const { CREATE_LEAD_DATA } = this.props

        CREATE_LEAD_DATA(dataRequest)
        this.setState({ pending_created: true })
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
        is_created: state.CUSTOMER_CREATED
    }),
    {
        CREATE_LEAD_DATA: createLeadCustomer
    }
)(registerForm)