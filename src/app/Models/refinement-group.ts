import { Refinement } from "app/Models/refinement";

export class RefinementGroup {
    
    public  Name :string;
    public  GroupId :number
    public Refinements :Refinement[]; 
}
