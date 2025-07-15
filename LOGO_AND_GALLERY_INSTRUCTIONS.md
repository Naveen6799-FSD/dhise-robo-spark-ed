# How to Change Logo and Gallery Photos

## Changing the Logo

The logo is currently located at `src/assets/dhise-logo.png`. To change it:

1. **Replace the logo file:**
   - Place your new logo image in the `src/assets/` folder
   - Name it `dhise-logo.png` (or update the import path below)

2. **Update the import in Navigation.tsx:**
   ```typescript
   import dhiseLogo from '../assets/your-new-logo.png';
   ```

3. **Update the import in Footer.tsx:**
   ```typescript
   import dhiseLogo from '../assets/your-new-logo.png';
   ```

## Changing Gallery Photos

The gallery photos are located in `src/assets/` with the following names:
- `gallery-1.jpg` - Students in robotics competition
- `gallery-2.jpg` - Robotics workshop session  
- `gallery-3.jpg` - Students with completed projects
- `early-years.jpg` - Early years robotics learning
- `elementary.jpg` - Elementary robotics class
- `middle-school.jpg` - Middle school robotics challenge

To change gallery photos:

1. **Replace the image files:**
   - Place your new images in the `src/assets/` folder
   - Use the same names as above, or update the import paths

2. **Update the imports in GallerySection.tsx:**
   ```typescript
   import gallery1 from '../assets/your-new-gallery-1.jpg';
   import gallery2 from '../assets/your-new-gallery-2.jpg';
   import gallery3 from '../assets/your-new-gallery-3.jpg';
   import earlyYearsImage from '../assets/your-new-early-years.jpg';
   import elementaryImage from '../assets/your-new-elementary.jpg';
   import middleSchoolImage from '../assets/your-new-middle-school.jpg';
   ```

3. **Update the alt text in the galleryImages array:**
   ```typescript
   const galleryImages = [
     { src: gallery1, alt: "Your new description 1" },
     { src: gallery2, alt: "Your new description 2" },
     { src: gallery3, alt: "Your new description 3" },
     { src: earlyYearsImage, alt: "Your new description 4" },
     { src: elementaryImage, alt: "Your new description 5" },
     { src: middleSchoolImage, alt: "Your new description 6" }
   ];
   ```

## Changing Curriculum Section Images

The curriculum section also uses images. To change them:

1. **Replace the image files in `src/assets/`:**
   - `early-years.jpg`
   - `elementary.jpg` 
   - `middle-school.jpg`
   - `high-school.jpg`
   - `teacher-training.jpg`
   - `school-integration.jpg`

2. **Update the imports in CurriculumSection.tsx:**
   ```typescript
   import earlyYearsImage from '../assets/your-new-early-years.jpg';
   import elementaryImage from '../assets/your-new-elementary.jpg';
   import middleSchoolImage from '../assets/your-new-middle-school.jpg';
   import highSchoolImage from '../assets/your-new-high-school.jpg';
   import teacherTrainingImage from '../assets/your-new-teacher-training.jpg';
   import schoolIntegrationImage from '../assets/your-new-school-integration.jpg';
   ```

## Changing Hero Background

To change the hero section background image:

1. **Replace `src/assets/hero-robotics.jpg`** with your new image
2. **Update the import in HeroSection.tsx:**
   ```typescript
   import heroImage from '../assets/your-new-hero-image.jpg';
   ```

## Image Requirements

- **Logo:** Square format (512x512px) PNG recommended
- **Gallery images:** Rectangular format (800x600px) JPG/PNG
- **Curriculum images:** Rectangular format (800x600px) JPG/PNG  
- **Hero image:** Wide format (1920x1080px) JPG for best quality

## Tips

- Keep image file sizes optimized for web (under 1MB each)
- Use descriptive alt text for accessibility
- Ensure images are high quality and relevant to robotics education
- Test the website after making changes to ensure images load properly