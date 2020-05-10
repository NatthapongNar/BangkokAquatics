import React, { Component } from 'react'
import { Row, Col, Form, Modal, Input, Select, Button, Checkbox } from 'antd'

import styles from '../../styles/component/register.scss'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

const field_colon_label = false

class Register extends Component {

    render() {
        const { data, handleClose, form } = this.props 
        const { getFieldDecorator } = form

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
                            <FormItem label={<div className={styles['form_label']}>Parent / Guardian First Name</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ParentFirstName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Parent / Guardian Last Name</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ParentLastName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Mobile Number</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('Mobile', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Email Address</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('Email', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Child’s First Name</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ChildFirstName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Child’s Last Name</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('ChildLastName', {})
                                    (<Input />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Name of school</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('School', {})
                                    (
                                        <Select>
                                            <Option value=""></Option>
                                        </Select>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label={<div className={styles['form_label']}>Desired Class</div>} className={styles['form_item']} colon={field_colon_label}>
                                {
                                    getFieldDecorator('Class', {})
                                    (
                                        <Select>
                                            <Option value=""></Option>
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
                                    getFieldDecorator('comments', {})
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

}

export default Form.create()(Register)