import { Category } from '@/data/questions';
import { FC } from 'react';
import './styles.css';

interface CategoryItemProps {
    category: Category;
    isSelected: boolean;
    onSelect: (category: Category) => void;
}

export const CategoryItem: FC<CategoryItemProps> = (props) => {
    const { category, isSelected, onSelect } = props;

    const CategoryIcon = category.icon;

    return (
        <div
            className={`category-quicklink ${isSelected && 'selected'}`}
            onClick={() => onSelect(category)}
        >
            <CategoryIcon.type className="category-quicklink-icon" />
            <p className="category-quicklink-text">{category.name}</p>
        </div>
    );
};
