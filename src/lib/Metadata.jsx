import React from 'react';
import { Helmet } from 'react-helmet-async';

const Metadata = ({
  title = "ICS-SP",
  description = "Parenting is a joyful, frustrating, exhilarating, exhausting journey. The challenge is enormous – to take the hand of a brand-new human being and guide children toward adulthood, teaching them all they need to know to have a happy, successful life. There are times in all parents’ lives when the challenge seems overwhelming. Sometimes we just",
  author = "ICS-SP Team",
  keywords = "parenting, education, child development, skillful parenting",
  thumbnail = "https://ics-skillfulparenting.org/wp-content/uploads/2023/02/cropped-Logo-512-512-Pixel.png",
  url = "https://ics-skillfulparenting.org/",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{`ICS-SP ${title}`}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <meta name="thumbnail" content={thumbnail} />

      {/* Open Graph / Facebook */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:site_name" content="ICS-Skillfulparenting" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
      <meta name="twitter:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Metadata;
