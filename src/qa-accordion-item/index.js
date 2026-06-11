import {RegisterBlockType} from '@wordpress/blocks';

import Edit from './edit';

import save from './save';

registerBlockType('create-block/qa-accordion-item', {
    edit: Edit,
    save,
    parent: ['create-block/qa-accordion-block']

});