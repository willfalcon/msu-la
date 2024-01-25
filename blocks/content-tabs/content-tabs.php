<?php 
  $classes = 'content-tabs';
  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }
  if ($is_preview) {
    $classes .= ' is-preview';
  }

  $allowed_blocks = array(
    'cdhq/content-tab'
  );


?>

<div class="<?php echo $classes; ?>">
  <?php if (get_field('mobile_text')) : ?>
    <div class="content-tabs__mobile-text">
      <p><?php the_field('mobile_text'); ?></p>
    </div>
  <?php endif; ?>
  <InnerBlocks allowedBlocks="<?php echo esc_attr( wp_json_encode( $allowed_blocks ) ); ?>" />
</div>