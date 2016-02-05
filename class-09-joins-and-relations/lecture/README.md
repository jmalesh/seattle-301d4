# Normalize Your Blog Data

Now that we have single-resource CRUD under our belt, let's apply some relational database best practices.

## Normalization

Right now, if we want to update an author's name or url, we need to make a change to every article table that references that author. If we need to add a new article by an existing author, we'll need to ensure the name/url values are typed exactly as they already exist. Anomalies can occur if, say, an update to author info doesn't get applied correctly across the entire table.

As you can imagine, this can get problematic over the life of a code base. Wouldn't it be nice if there was just 1 place to go, to update a given record?

Let's promote author to a standalone resource, that we can CRUD independently of articles.

That will allow us to replace author data in each article with a pointer (called a "foreign key") to the proper author resource.

This concept, of keeping separate data separate, is called "Normalization". By eliminating redundancy, we improve consistency and flexibility.

We can follow a few guiding principles to achieve normalization.

Atomic values that can't be decomposed, and just 1 per row attribute.

Don't put 2 values into the same cell. Duh.

Tables with composite keys cannot have attributes that depend on only part of the key. This is an indication that we should have 2 tables.

Non-key attributes are dependent upon the whole key.

Non-key attributes are dependent on "nothing but the key".

## Class Videos
