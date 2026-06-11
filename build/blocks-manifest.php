<?php
// This file is generated. Do not modify it manually.
return array(
	'qa-accordion-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/qa-accordion-block',
		'version' => '0.1.0',
		'title' => 'Qa Accordion Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'qa-accordion-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'qa-accordion-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/qa-accordion-item',
		'title' => 'Accordion Item',
		'category' => 'widgets',
		'icon' => 'arrow-down-alt2',
		'parent' => array(
			'create-block/qa-accordion-block'
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./item-style.css',
		'supports' => array(
			'html' => false
		)
	)
);
