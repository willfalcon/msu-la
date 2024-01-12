<?php 
  $classes = 'content-tabs';
  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }

  $allowed_blocks = array(
    'cdhq/content-tab'
  )
?>

<div class="<?php echo $classes; ?>">
  <InnerBlocks allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>" />
</div>