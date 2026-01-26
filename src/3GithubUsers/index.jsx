import SearchSection from "./SearchSection/Index";
import UserSection from "./UserSection"
import StateNumber from "./LearningNumbers/StateNumber";
import Colors from "./LearningNumbers/"
function App(){
   return(
      <div>
         <StateNumber />
         <Colors />
         <SearchSection />
         <UserSection />
      </div>
   )
}
export default App;