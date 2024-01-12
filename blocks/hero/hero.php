<?php
  $classes = 'hero';
  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }
?>

<div class="<?php echo $classes; ?>">
  <div class="hero__image-wrapper">
    <?php $image = get_field('image'); ?>
    <?php if ($image) : ?>
      <img class="hero__image" src="<?php echo $image['sizes']['large']; ?>" alt="<?php echo $image['alt']; ?>" />
    <?php endif; ?>
  </div>
  <?php if (get_field('primary_heading')) : ?>
    <p class="hero__heading--primary"><?php the_field('primary_heading'); ?></p>
  <?php endif; ?>
  <?php if (get_field('secondary_heading')) : ?>
    <p class="hero__heading--secondary"><?php the_field('secondary_heading'); ?></p>
  <?php endif; ?>
</div>