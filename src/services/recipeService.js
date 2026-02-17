import { 
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  query,
  orderBy 
} from 'firebase/firestore';
import { db } from '../firebase/config';

const recipesCollection = collection(db, 'recipes');

export const recipeService = {
  // GET all recipes
  getAllRecipes: async () => {
    try {
      const q = query(recipesCollection, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const recipes = [];
      querySnapshot.forEach((doc) => {
        recipes.push({ id: doc.id, ...doc.data() });
      });
      return recipes;
    } catch (error) {
      console.error('Error getting recipes:', error);
      throw error;
    }
  },

  // GET single recipe by ID
  getRecipeById: async (id) => {
    try {
      const recipeDoc = doc(db, 'recipes', id);
      const recipeSnapshot = await getDoc(recipeDoc);
      
      if (recipeSnapshot.exists()) {
        return { id: recipeSnapshot.id, ...recipeSnapshot.data() };
      } else {
        throw new Error('Recipe not found');
      }
    } catch (error) {
      console.error('Error getting recipe:', error);
      throw error;
    }
  },

  // CREATE new recipe
  createRecipe: async (recipeData) => {
    try {
      const docRef = await addDoc(recipesCollection, {
        ...recipeData,
        createdAt: new Date().toISOString()
      });
      return { id: docRef.id, ...recipeData };
    } catch (error) {
      console.error('Error creating recipe:', error);
      throw error;
    }
  },

  // UPDATE recipe
  updateRecipe: async (id, recipeData) => {
    try {
      const recipeDoc = doc(db, 'recipes', id);
      await updateDoc(recipeDoc, recipeData);
      return { id, ...recipeData };
    } catch (error) {
      console.error('Error updating recipe:', error);
      throw error;
    }
  },

  // DELETE recipe
  deleteRecipe: async (id) => {
    try {
      const recipeDoc = doc(db, 'recipes', id);
      await deleteDoc(recipeDoc);
    } catch (error) {
      console.error('Error deleting recipe:', error);
      throw error;
    }
  }
};