import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div className="qa-item">
             <div className="title-area">
			<RichText.Content
				tagName="h4"
				className="qa-title"
				value={ attributes.title }
			/>
            <span class="dashicons dashicons-plus-alt2"></span>
            </div>
			<div className="qa-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
