package com.teknocrats.gamify.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teknocrats.gamify.Entity.ItemEntity;
import com.teknocrats.gamify.Service.ItemService;

@RestController
@RequestMapping("/item")
public class ItemController {
	@Autowired
	ItemService itemService;
	
	@PostMapping("/postItem")
    public ItemEntity insertItem(@RequestBody ItemEntity item) {
    	return itemService.insertItem(item);
    }
	
	@GetMapping("/getAllItems")
    public List<ItemEntity> getAllItems(){
        return itemService.getAllItems();
    }
	
	@GetMapping("/getByItemId")
    public ItemEntity findByItemId(@RequestParam int itemid) throws Exception{
    	return itemService.findByItemId(itemid);
    }
	
	@PutMapping("/putItem")
    public ItemEntity putItem(@RequestParam int itemid, @RequestBody ItemEntity newItemDetails) throws Exception{
    	return itemService.putItem(itemid, newItemDetails);
    }
	
	@DeleteMapping("/deleteItem/{itemid}")
    public String deleteItem(@PathVariable int itemid) {
    	return itemService.deleteItem(itemid);
    }
}
