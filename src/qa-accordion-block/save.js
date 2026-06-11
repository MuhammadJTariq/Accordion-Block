import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    return (
        <div className="qa-accordion">
            <InnerBlocks.Content />
        </div>
    );
}