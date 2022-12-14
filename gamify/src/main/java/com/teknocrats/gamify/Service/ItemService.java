package com.teknocrats.gamify.Service;

import java.util.List;
import java.util.NoSuchElementException;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teknocrats.gamify.Entity.ItemEntity;
import com.teknocrats.gamify.Repository.ItemRepository;

@Service
public class ItemService {
	
	@Autowired
	ItemRepository itemRepository;
	
	public ItemEntity insertItem(ItemEntity item) {
		return itemRepository.save(item);
	}
	
	public List<ItemEntity> getAllItems(){
		return itemRepository.findAll();
	}

	public int getItemId(String question) {
		return itemRepository.findItemIdByQuestion(question);
	}
	
	public int getTimerByItemid(int itemid) {
		return itemRepository.findTimerByItemid(itemid);
	}
	
	public String getQuestionByItemid(int itemid) {
		return itemRepository.findQuestionByItemid(itemid);
	}
	
	public String getAnswerByItemid(int itemid) {
		return itemRepository.findAnswerByItemid(itemid);
	}
	
	public String getChoiceoneByItemid(int itemid) {
		return itemRepository.findChoiceoneByItemid(itemid);
	}
	
	public String getChoicetwoByItemid(int itemid) {
		return itemRepository.findChoicetwoByItemid(itemid);
	}
	
	public String getChoicethreeByItemid(int itemid) {
		return itemRepository.findChoicethreeByItemid(itemid);
	}
	
	public ItemEntity findByItemId(int itemid) {
		if(itemRepository.findByItemid(itemid) != null) {
			return itemRepository.findByItemid(itemid);
		}
		else {
			return null;
		}
	}
	
	public ItemEntity putItem(int id, ItemEntity newItemDetails) throws Exception{
		ItemEntity item = new ItemEntity();
		try {
			item = itemRepository.findById(id).get();
			item.setQuestiontype(newItemDetails.getQuestiontype());
			item.setTimer(newItemDetails.getTimer());
			item.setQuestion(newItemDetails.getQuestion());
			item.setAnswer(newItemDetails.getAnswer());
			item.setChoiceone(newItemDetails.getChoiceone());
			item.setChoicetwo(newItemDetails.getChoicetwo());
			item.setChoicethree(newItemDetails.getChoicethree());
			
			return itemRepository.save(item);
		}
		catch(NoSuchElementException ex){
			throw new Exception("Item with ID number " + id + " does not exist!");
		}
	}
	
	public String deleteItem(int id) {
		String msg;
		
		if(itemRepository.findById(id) != null) {
			itemRepository.deleteById(id);
					
			msg = "Item with ID Number " + id + " is successfully deleted!";
		}
		else {
			msg = "Item with ID Number " + id + " does not exist!";
		}
		return msg;
	}
}
