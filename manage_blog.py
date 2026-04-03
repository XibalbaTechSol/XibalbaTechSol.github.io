#!/usr/bin/env python3
import os
import re
import sys
from datetime import datetime

# --- Configuration ---
BLOG_SRC = "blog/src"
BLOG_DIST = "blog"
TEMPLATE_PATH = "blog/templates/post_template.html"
BLOG_INDEX_PATH = "blog.html"

def parse_markdown(md_content):
    """Very basic markdown to HTML converter for solo entrepreneur simplicity."""
    # YAML Frontmatter
    meta = {}
    frontmatter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', md_content, re.DOTALL)
    if frontmatter_match:
        fm_block = frontmatter_match.group(1)
        for line in fm_block.split('\n'):
            if ':' in line:
                key, val = line.split(':', 1)
                meta[key.strip()] = val.strip().strip('"')
        content = md_content[frontmatter_match.end():]
    else:
        content = md_content

    # Headers
    content = re.sub(r'^# (.*?)$', r'<h1>\1</h1>', content, flags=re.MULTILINE)
    content = re.sub(r'^## (.*?)$', r'<h2>\1</h2>', content, flags=re.MULTILINE)
    content = re.sub(r'^### (.*?)$', r'<h3>\1</h3>', content, flags=re.MULTILINE)
    
    # Bold / Italic
    content = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
    content = re.sub(r'\*(.*?)\*', r'<em>\1</em>', content)
    
    # Blockquotes
    content = re.sub(r'^> (.*?)$', r'<blockquote>\1</blockquote>', content, flags=re.MULTILINE)
    
    # Code Blocks
    content = re.sub(r'```(.*?)\n(.*?)\n```', r'<pre><code>\2</code></pre>', content, flags=re.DOTALL)
    content = re.sub(r'`(.*?)`', r'<code>\1</code>', content)
    
    # Lists
    content = re.sub(r'^\d+\. (.*?)$', r'<li>\1</li>', content, flags=re.MULTILINE)
    content = re.sub(r'^[\-\*] (.*?)$', r'<li>\1</li>', content, flags=re.MULTILINE)
    
    # Links
    content = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', content)
    
    # Paragraphs (crude but effective)
    paragraphs = content.split('\n\n')
    content = ''.join([f'<p>{p.strip()}</p>' if not p.strip().startswith('<') else p.strip() for p in paragraphs])
    
    return meta, content

def build_blog():
    print("--- Xibalba Intel Foundry: Building Blog ---")
    
    if not os.path.exists(TEMPLATE_PATH):
        print(f"Error: Template not found at {TEMPLATE_PATH}")
        return

    with open(TEMPLATE_PATH, 'r') as f:
        template = f.read()

    posts = []
    src_files = [f for f in os.listdir(BLOG_SRC) if f.endswith('.md')]
    
    for filename in src_files:
        print(f"Processing: {filename}")
        with open(os.path.join(BLOG_SRC, filename), 'r') as f:
            md_content = f.read()
        
        meta, html_content = parse_markdown(md_content)
        
        # Determine output path
        slug = filename.replace('.md', '.html')
        meta['slug'] = slug
        
        # Apply template
        post_html = template
        for key, val in meta.items():
            post_html = post_html.replace(f'{{{{{key}}}}}', str(val))
        post_html = post_html.replace('{{content}}', html_content)
        
        # Write post
        with open(os.path.join(BLOG_DIST, slug), 'w') as f:
            f.write(post_html)
            
        posts.append(meta)

    # Sort posts by date descending
    posts.sort(key=lambda x: x.get('date', ''), reverse=True)

    # Update blog.html index
    update_index(posts)
    print(f"Successfully generated {len(posts)} posts and updated index.")

def update_index(posts):
    if not os.path.exists(BLOG_INDEX_PATH):
        print("Error: blog.html not found.")
        return

    with open(BLOG_INDEX_PATH, 'r') as f:
        index_html = f.read()

    # Build the post list HTML
    posts_list_html = ""
    for post in posts:
        post_item = f"""
            <article class="feature-card animate-in" style="padding: 0; overflow: hidden; margin-bottom: 2rem;">
                <div style="padding: 2.5rem;">
                    <div style="color: var(--cyan-core); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 1rem;">// {post.get('date', 'N/A')} - {post.get('category', 'GENERAL')}</div>
                    <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">{post.get('title', 'Untitled Post')}</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">{post.get('excerpt', '')}</p>
                    <a href="blog/{post.get('slug')}" style="color: var(--violet-core); text-decoration: none; font-weight: 600; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em;">Read Full Intel →</a>
                </div>
            </article>
        """
        posts_list_html += post_item

    # Replace the blog-grid content
    # Look for the blog-grid div and replace its content
    start_tag = '<div class="blog-grid" style="display: grid; grid-template-columns: 1fr; gap: 3rem;">'
    end_tag = '<!-- Placeholder for future posts -->'
    
    pattern = re.compile(f'{re.escape(start_tag)}.*?{re.escape(end_tag)}', re.DOTALL)
    new_index_html = pattern.sub(f'{start_tag}{posts_list_html}\n            {end_tag}', index_html)

    with open(BLOG_INDEX_PATH, 'w') as f:
        f.write(new_index_html)

if __name__ == "__main__":
    build_blog()
