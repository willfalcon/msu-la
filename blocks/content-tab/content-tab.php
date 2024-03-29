<?php 
  $classes = 'content-tab';
  
  $tab = $block['id'] . '-tab';
  $panel = $block['id'] . '-panel';
?>


<button class="<?php echo $classes; ?>" id="<?php echo $tab; ?>" role="tab" aria-controls="<?php echo $panel; ?>" aria-selected="false">

  <div class="content-tab__icon"><i class="fa-solid fa-chevron-down"></i></div>

  <div class="content-tab__main-button">
    <div class="content-tab__image-wrapper">
      <?php $background = get_field('background');?>
      <img src="<?php echo $background['sizes']['medium_large']; ?>" alt="" />
    </div>

    <?php $heading = get_field('heading_image'); ?> 
    <img class="content-tab__heading-image" src="<?php echo $heading['sizes']['medium_large']; ?>" alt="<?php the_field('heading'); ?>" /> 

    <div class="content-tab__text-wrapper">
      <span class="content-tab__text"><?php the_field('text'); ?></span>
      <span class="content-tab__icon-wrapper"><i class="fa-solid fa-chevron-down"></i></span>
    </div> 
  </div>

</button>

<div class="content-tab-content" id="<?php echo $panel; ?>" role="tabpanel" tabindex="0" aria-labelledby="<?php echo $tab; ?>">
  <InnerBlocks />
</div>
