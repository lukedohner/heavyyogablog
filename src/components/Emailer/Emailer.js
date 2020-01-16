
import { navigate } from "gatsby";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";

const FormItem = Form.Item;
const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";

const Emailer = ({ siteTitle, siteDescription }) => (
      <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
<div>
  
      <div className="form" > 
        <form action="https://formspree.io/lukedohner@gmail.com" method="POST">

          <FormItem label="Name" required>
          
          <Input name="email" type="email"  placeholder="Your email (so I can email you!)" ></Input>

          
          </FormItem>


          <FormItem label="Message" required>
          <TextArea name="message" placeholder="Your Message"></TextArea>
          </FormItem>



          
          <input className="ant-btn-primary" type="submit" value="Tell Heavy Yoga!"></input>
          <input type="hidden" name="_subject" value="New submission from LocalHost:8000! You may know it as hhhheavyyoga.com" />
        </form>
              <style jsx>{`
              .form {
                background: transparent;
              }
              .form :global(.ant-row.ant-form-item) {
                margin: 0 0 1em;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                margin-top: 1em;
              }
              .form :global(.ant-form-item-control) {
                line-height: 1em;
              }
              .form :global(.ant-form-item-label) {
                line-height: 1em;
                margin-bottom: 0.5em;
              }
              .form :global(.ant-form-item) {
                margin: 0;
              }
              .form :global(.ant-input) {
                appearance: none;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 0.6em;
              }
              .form :global(.ant-btn-primary) {
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 3em;
                background: ${theme.color.brand.primary};
                border: 1px solid ${theme.color.brand.primary};
                border-radius: 9px;
              }
              .form :global(.ant-form-explain) {
                margin-top: 0.2em;
              }

              @from-width desktop {
                .form :global(input) {
                  max-width: 50%;
                }
              }
            `}</style>
      </div>

</div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
)

Emailer.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Emailer.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Emailer