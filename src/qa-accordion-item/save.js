import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    return (
        <div className="qa-item">

            <RichText.Content
                tagName="div"
                className="qa-title"
                value={attributes.title}
            />

            <div className="qa-content">
                <InnerBlocks.Content />
            </div>

        </div>
    );
}