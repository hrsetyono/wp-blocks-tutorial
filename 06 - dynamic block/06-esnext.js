/**
 * Tutorial 06 - Dynamic Block
 * 
 * Check out the README in this folder for details
 */

import './06.css';
import { registerBlockType } from '@wordpress/blocks';
import { SelectControl,
  __experimentalNumberControl as NumberControl } from '@wordpress/components';

registerBlockType( 'my/tut-06', {
  title: '06 - Dynamic Block',
  icon: 'book',
  category: 'layout',

  // Attributes for Latest Posts
  attributes: {
    postsPerPage: { type: 'number' },
    selectedCategory: { type: 'string' },
    categories: { type: 'object' },
  },

  edit: function( props ) {
    let atts = props.attributes;
    
    // Get list of categories if doesn't exists yet
    if( !atts.categories ) {
      wp.apiFetch( {
        url: '/wp-json/wp/v2/categories',
      } ).then( categories => {
        props.setAttributes( { categories: categories } );
      } )
    }

    // If categories not yet loaded
    if( !atts.categories ) {
      return 'Loading...';
    }

    // If no categories found
    if( atts.categories && atts.categories.length <= 0 ) {
      return 'No categories found, please add some';
    }


    return <div className={ props.className }>
      {/* Category select */}
      <SelectControl label="Post Category"
        options={ [
          { label: 'Select a Category', value: '' },
          // loop through categories and create the options format
          // the triple dots is to merge this with the array
          ...atts.categories.map( category => {
            return { label: category.name, value: category.id };
          } )
        ] }
        value={ atts.selectedCategory }
        onChange={ value => props.setAttributes( { selectedCategory: value } ) }
      />

      {/* Input for postsPerPage */}
      <NumberControl label="Posts per Page"
        value={ atts.postsPerPage }
        placeholder="Enter number of posts"
        onChange={ value => props.setAttributes({ postsPerPage: value }) }
      />
    </div>
  },

  // Let the gutenberg know that this will be rendered via render_callback in PHP
  // Or you can simply remove this function
  save: function( props ) {
    return null
  }

} );


/*
  That's all folks!
  
  If you spot a mistake or want to request a topic, let me know in https://github.com/hrsetyono/wp-blocks-tutorial/issues
*/