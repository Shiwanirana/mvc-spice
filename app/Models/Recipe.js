// import { ProxyState} from "../AppState.js"
import { generateId } from "../utils/GenerateId.js";

export default class Recipe{
  constructor({id,title,description,imgUrl}){
     this.id = id || generateId()
    this.title = title
    this.description = description
    this.imgUrl = imgUrl
  }

  get Template(){
    return `
    <div class="col-3 mx-4" data-toggle="modal" data-target="#new-recipe-detail">
            <div class="card" style="min-width: 20rem;">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body">
                    <h4>${this.title}</h4>
                  <p class="card-text">${this.description}</p>
                </div>
              </div>
          </div>

          <div class="modal fade" id="new-recipe-detail" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        
        <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4"><img src="${this.imgUrl}" class="fit-image"></div>
            
            <div class="col-md-4 ml-auto"><h5 class="text-warning p-0 m-0">${this.title}</h5>
            <small>${this.description}</small>
            
    <div class="card border-success mb-3  rounded shadow-lg" style="min-width: 15rem;">
  <div class="card-header bg-warning text-center">
  <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
     <span><i class="fas fa-pen"></i></span>
     </button>
  <h5 class="text-center">Recipe steps</h5>
  <h4 id="countTotal"></h4>
  </div>
  <div class="card-body text-success bg-orange">
    <p class="card-text"><h5>List Items:</h5>
       <dl>
         ${this.Items}
      </dl></p>
      <form class="no-outline" onsubmit="app.itemController.addListItem(event, '${this.id}')">
         <div class="form-group">
           <label for="listItemName">list Item:</label>
           <input type="text" name="itemTitle" class="form-control" placeholder="Type a list item in here..." aria-describedby="helpId">
           <button type="submit" class="btn btn-outline-'${this.color}' btn-sm">+</button>
         </div>
      </form>
  </div>
  <div class="card-footer bg-transparent border-white">
  
    </div>

</div>
            </div>
            <div class="col-md-4 ml-auto">
            <button type="button" class="close mb-4" data-dismiss="modal">&times;</button>
            <div class="card border-success mt-5 mb-3  rounded shadow-lg" style="min-width: 15rem;">
            <div class="card-header bg-warning text-center">
            <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
               <span><i class="fas fa-pen"></i></span>
               </button>
            <h5 class="text-center">Ingredients</h5>
            <h4 id="countTotal"></h4>
            </div>
            <div class="card-body text-success bg-orange">
              <p class="card-text"><h5>List Items:</h5>
                 <dl>
                   ${this.Items}
                </dl></p>
                <form class="no-outline" onsubmit="app.itemController.addListItem(event, '${this.id}')">
                   <div class="form-group">
                     <label for="listItemName">list Item:</label>
                     <input type="text" name="itemTitle" class="form-control" placeholder="Type a list item in here..." aria-describedby="helpId">
                     <button type="submit" class="btn btn-outline-'${this.color}' btn-sm">+</button>
                   </div>
                </form>
            </div>
            <div class="card-footer bg-transparent border-white">
            
              </div>
          
          </div></div>
          </div>
          
          
          
            </div>
          </div>
        </div>
      
        </div>
       
      </div>
    </div>
  </div>
    `
  }
}