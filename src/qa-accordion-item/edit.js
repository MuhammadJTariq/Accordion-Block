import{ RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Edit({attributes, setAttributes}){
    return (
        <div className="qa-item">
            <RichText 
                tagname="div"
                className="qa-title"
                value={attributes.title}
                onChange={(title) => setAttributes({title})}
                placeholder='Accordion Title'
                />

                <div className="qa-content">
                    <InnerBlocks/>
                </div>
        </div>
    );
}