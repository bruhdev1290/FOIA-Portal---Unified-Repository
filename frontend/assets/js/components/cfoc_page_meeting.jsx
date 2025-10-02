import React from 'react';
import PropTypes from 'prop-types';
import CFOCPageMeetingDocumentsComponent from './cfoc_page_meeting_documents';
import CFOCPageMeetingMaterialsComponent from './cfoc_page_meeting_materials';

function CFOCPageMeetingComponent(props) {
  return (
    <li className="cfoc-page-meeting">
      <button className="usa-accordion-button" aria-controls={props.id} aria-expanded="false">
        {props.date}
      </button>
      <div id={props.id} className="usa-accordion-content" aria-hidden="true">
        {
          !props.title
            ? null
            : (
              <h3>{props.title}</h3>
            )
        }
        {
          !props.body
            ? null
            : (
              <article dangerouslySetInnerHTML={{ __html: props.body }} />
            )
        }
        {
          props.materials.length
            ? (
              <div className="cfoc-page-meeting-materials">
                <p><i>Meeting Materials</i></p>
                <ul>
                  {
                    props.materials.map((material, index) => {
                      const key = material.item_title.length * index;
                      return (
                        <li key={key}>
                          <CFOCPageMeetingMaterialsComponent
                            title={material.item_title}
                            link={material.item_link}
                            key={key}
                          />
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            )
            : null
        }
        {
          props.documents.length
            ? (
              <div className="cfoc-page-meeting-document-links">
                <p><i>Working Documents</i></p>
                <ul>
                  {
                    props.documents.map((document, index) => {
                      const key = document.item_title.length * index;
                      return (
                        <li key={key}>
                          <CFOCPageMeetingDocumentsComponent
                            title={document.item_title}
                            link={document.item_link}
                            key={key}
                          />
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            )
            : null
        }
      </div>
    </li>
  );
}

CFOCPageMeetingComponent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  documents: PropTypes.array,
  document: PropTypes.shape({
    item_title: PropTypes.string,
    item_link: PropTypes.string,
  }),
  materials: PropTypes.array,
  material: PropTypes.shape({
    item_title: PropTypes.string,
    item_link: PropTypes.string,
  }),
  id: PropTypes.string,
  date: PropTypes.string,
};

CFOCPageMeetingComponent.defaultProps = {
  title: '',
  body: '',
  documents: [],
  document: {
    item_title: '',
    item_link: '',
  },
  materials: [],
  material: {
    item_title: '',
    item_link: '',
  },
  id: '',
  date: '',
};

export default CFOCPageMeetingComponent;
