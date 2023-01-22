export async function load({ params }){
    const post = await import(`../../../lib/data/guides/${params.slug}.md`)
    const { title, date, author, description } = post.metadata
    const content = post.default
  
    return {
      content,
      title,
      date,
      author,
      description
    }
  }