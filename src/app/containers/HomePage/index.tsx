import { Col, Input, Row } from 'antd';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { UserOutlined } from '@ant-design/icons';
import { Formik } from 'formik';

export function HomePage(props: any) {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
      <Row style={{ textAlign: 'center' }}>
        <Col span={12} offset={6}>
          {/* <Input placeholder="default size" prefix={<UserOutlined />} /> */}
          <h1>My Form</h1>
          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(true);
              }, 1000);
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                />
                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        </Col>
      </Row>
    </>
  );
}
