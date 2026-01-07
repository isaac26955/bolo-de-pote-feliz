import ProductCard from "@/components/ProductCard";
import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakeDulce from "@/assets/cake-dulce.jpg";
import cakeMaracuja from "@/assets/cake-maracuja.jpg";

const products = [
  {
    name: "Chocolate Belga",
    description: "Camadas de bolo de chocolate, mousse e brigadeiro cremoso",
    price: "R$ 15,00",
    image: cakeChocolate,
  },
  {
    name: "Morango com Ninho",
    description: "Bolo de baunilha, creme de leite ninho e morangos frescos",
    price: "R$ 15,00",
    image: cakeStrawberry,
  },
  {
    name: "Doce de Leite",
    description: "Bolo de baunilha com generosas camadas de doce de leite",
    price: "R$ 15,00",
    image: cakeDulce,
  },
  {
    name: "Maracujá Tropical",
    description: "Mousse de maracujá com bolo leve e cobertura cremosa",
    price: "R$ 15,00",
    image: cakeMaracuja,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossos Sabores
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Delícias no <span className="text-gradient bg-gradient-hero">Potinho</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Cada bolo é preparado com ingredientes frescos e muito carinho. 
            Escolha seu sabor favorito e peça agora mesmo!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              {...product}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
