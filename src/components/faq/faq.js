import React from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Button, Col, Accordion, Row } from 'react-bootstrap';
import { BsChevronRight } from 'react-icons/bs';

const Faq = (props) => {
  return (
    <>
      <div className='p-5'>
        <h4 className='orange'>ANIME LIMITED</h4>
        <h1>FREQUENTLY ASKED QUESTIONS</h1>

        <div className='p-5'>
          {/* defaultActiveKey='0' */}
          <Accordion>
            <div className='faq-item'>
              <div>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  <BsChevronRight /> How do i notify the IRS my address has
                  changed?
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='0' className='pl-4'>
                <div className='pt-5 pb-5'>Hello! I'm the body</div>
              </Accordion.Collapse>
            </div>
            <div className='faq-item'>
              <div>
                <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                  <BsChevronRight /> Is there an age limit on claiming my child
                  as a dependent?
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='1' className='pl-4'>
                <div className='pt-5 pb-5'>Hello! I'm another body</div>
              </Accordion.Collapse>
            </div>
            <div className='faq-item'>
              <div>
                <Accordion.Toggle
                  as={Button}
                  variant='link'
                  eventKey='2'
                  className='text-left'
                >
                  <BsChevronRight /> How much income can an unmarried dependent
                  student make before he or she must file an income tax return
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='2' className='pl-4'>
                <div className='pt-5 pb-5'>Hello! I'm another body</div>
              </Accordion.Collapse>
            </div>
            <div className='faq-item'>
              <div>
                <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                  <BsChevronRight /> Is there an age limit on claiming my child
                  as a dependent?
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='3' className='pl-4'>
                <div className='pt-5 pb-5'>Hello! I'm another body</div>
              </Accordion.Collapse>
            </div>
            <div className='faq-item'>
              <div>
                <Accordion.Toggle as={Button} variant='link' eventKey='4'>
                  <BsChevronRight /> Is there an age limit on claiming my child
                  as a dependent?
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='4' className='pl-4'>
                <div className='pt-5 pb-5'>Hello! I'm another body</div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </div>
      </div>
      <img
        src={require('../../assets/yfu/woman.png')}
        className='fixed-bottom left-auto max-width-40'
        alt=''
      />
    </>
  );
};

export default withNamespaces()(withRouter(Faq));
