import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <>
        <MyInput
          type="text"
          placeholder="Seacrh..."
          value={filter.search}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
        />
        <MySelect
          value={filter.sort}
          onChange={sort => setFilter({...filter, sort})}
          defaultValue="Sort by"
          options={[
            { value: "title", name: "Title" },
            { value: "description", name: "Description" },
          ]}
        />
      </>
    )
}

export default PostFilter;