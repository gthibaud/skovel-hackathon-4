import { Category } from '@/data/questions';
import { FC } from 'react';
import { CategoryItem } from './Item';
import { RemoveFiltersButton } from './Remove';
import './styles.css';

interface CategoriesProps {
    categories: Category[];
    selectedCategories: Category[];
    setSelectedCategories: (categories: Category[]) => void;
}

export const Categories: FC<CategoriesProps> = (props) => {
    const { categories, selectedCategories, setSelectedCategories } = props;

    const handleSelectCategory = (category: Category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className="categories-container">
            {selectedCategories.length > 0 && (
                <RemoveFiltersButton onClick={() => setSelectedCategories([])} />
            )}
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    category={category}
                    isSelected={selectedCategories.includes(category)}
                    onSelect={handleSelectCategory}
                />
            ))}
        </div>
    );
};
