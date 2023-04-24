const ProductRow = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === products.length - 4;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ArrowCircleLeft onClick={handlePrevClick} disabled={isPrevDisabled} />
      <Box sx={{ display: 'flex', overflowX: 'scroll', scrollSnapType: 'x mandatory', gap: 2 }}>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            sx={{
              scrollSnapAlign: 'start',
              minWidth: 345,
              visibility: index >= currentSlide && index < currentSlide + 4 ? 'visible' : 'hidden',
            }}
          />
        ))}
      </Box>
      <ArrowCircleRight onClick={handleNextClick} disabled={isNextDisabled} />
    </Box>
  );
};
