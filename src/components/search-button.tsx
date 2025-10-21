import { Button } from './ui/button'
import { Search } from 'lucide-react'

export function SearchButton(){
    return  <Button variant="outline" size="icon" aria-label="Search">
        <Search />
    </Button>
}