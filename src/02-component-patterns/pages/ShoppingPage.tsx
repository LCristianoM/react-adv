import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[1];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<ProductCard
				key={product.id}
				product={product}
				className="bg-dark text-white"
				initialValues={{
					count: 0,
					maxCount: 15,
				}}
			>
				{({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
					<>
						<ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.3)" }} />
						<ProductTitle className="" />
						<ProductButtons className="custom-buttons" />

						{/* { JSON.stringify( args, null, 3)} */}
						<button onClick={reset}> Reset </button>
						<button onClick={() => increaseBy(-2)}> -2 </button>

						{
							(!isMaxCountReached && <button onClick={ () => increaseBy(+2)}> +2 </button>)
						}

						<span>{count} - {maxCount} </span>
					</>
				)}
			</ProductCard>
		</div>
	);
};
