## CSS QUESTIONS:

#### Ans1. Box model is the fundamental concept in CSS. It describe how elements are rendered and how their dimensions are calculated.

- It consists of different components, these are:

#### Content: It represents the content of the element.

#### Padding: It is the space between the content and element’s border.

```
padding : “1vh 2vh”;
```

#### Border: It is the line that surrounds the padding.

```
 border:”1px solid #000”;
```

#### Margin: It is the space outside the element’s border, which separates it from neighboring elements.

```
 margin: “2vh”;
```

#### CSS properties that are part of it:

width, height, padding, border, margin etc.

#### Ans2. There are various types of selectors in css:

- Type selector: In this we target elements based on their HTML tag names (e.g. h1, p, div).

  - The advantage of type selectors is that they are straightforward to use and can quickly apply styles to multiple elements of the same type.

- Class Selectors: We target the elements based on their class attribute name.

  - Class selectors are versatile as we can assign multiple classes to an element.

- ID Selectors: They target elements based on their id attribute (e.g. #header, #navbar).

  - ID selectors are unique, it means we should only have one element with a particular ID on a page.

- Child Selectors: They target elements that are direct children of a parent element.
  - For instance, ul > li selects all li elements that are immediate children of a ul element.

### The advantages of using CSS selectors include:

#### 1.Flexibility: CSS selectors allow us to precisely target and style specific elements or groups of elements.

#### 2. Reusability: By using class and ID selectors, we can define styles once and apply them to multiple elements throughout our website.

#### 3. Specificity: Selectors like ID selectors have high specificity, which helps us target specific elements and override more general styles.

#### 4. Maintainability: CSS selectors make it easier to maintain and update the styles of our web pages.

### Ans3. VW (Viewport Width)/ VH (Viewport Height)

- 1 VW is equal to 1% of the viewport width.
- 1 VH is equal to 1% of the viewport height.
- It is useful for creating responsive layouts that adapt to different screen sizes.

- PX (Pixels): PX is an absolute unit of measurement that represents a fixed number of pixels.

- The main difference between VW/VH and PX is their behavior in responsive designs. VW and VH are relative units that adjust based on the viewport size, making them well-suited for creating layouts that adapt to different screen sizes. On the other hand, PX units are fixed and do not change based on the viewport, which may lead to less flexible designs on various devices.

#### Ans4. Inline, inline-block, and block are CSS display properties that control the layout and behavior of elements.

- Inline:
  Inline elements do not start on a new line and only take up as much width as necessary.
  Examples of inline elements are

```
 <span>, <a>.
```

- Inline elements do not accept width or height properties. Margins and paddings can be applied horizontally but not vertically.
- Multiple inline elements will appear side by side within the same line.

#### Inline-block:

- Inline-block elements are similar to inline elements in that they do not start on a new line.
- However, inline-block elements can have width, height, margins, and paddings applied to them.
- Examples of inline-block elements are

```
 <img>, <input>, and <button>.
```

- Multiple inline-block elements will also appear side by side within the same line.

#### Block:

- Block elements start on a new line and take up the full available width by default.
  Examples of block elements are

```
<div>, <p>, <h1> to <h6>, and <section>.
```

- Block elements accept width, height, margins, paddings, and other layout-related properties.
- They will always start on a new line and occupy the full width available.

### Ans5. The z-index property specifies the stack order of an element. An element which has greater stack order, always gets priority with a lower stack order. By default the z-index is 1.

- Higher z-index values bring elements closer to the viewer, appearing in front of elements with lower z-index values.

#### Ans6. They both provide different approaches to creating flexible and responsive layouts.

- Flexbox (Flexible Box):

  - Flexbox is a one-dimensional layout system designed for arranging elements in a row or a column.
    Flexbox is best suited for creating dynamic and flexible layouts for components
    Key properties of Flexbox include display: flex, flex-direction, justify-content, align-items

- Grid (CSS Grid Layout):
  - Grid is a two-dimensional layout system that allows you to create complex and grid-based layouts.
  - It divides the available space into rows and columns.
    Key properties of Grid include display: grid on the container element,grid-template-columns, grid-template-rows, grid-gap..
    Main differences between
- Flexbox and Grid:
- Dimensionality: Flexbox is a one-dimensional layout system, while Grid is a two-dimensional layout system.
- Layout Control: Flexbox primarily focuses on distributing and aligning elements along one axis, with limited control over the other axis. Grid provides comprehensive control over both row and column.
- Complexity:Grid is more powerful and complex.
  Browser Support: Both Flexbox and Grid have widespread browser support, but older versions of Internet Explorer have limited or partial support for Grid.

### Ans7.

- Relative Positioning:
  In this element is positioned relative to its normal position in the document flow.
- When an element is positioned relatively, it can be moved from its original position using properties like top, bottom, left, and right.
  Other elements in the are not affected by the relative positioning of the element.

- Eg: position: relative; top: 10px; left: 30px.

  - In this example, the element is positioned 10 pixels down and 30 pixels to the right from its original position.

- Absolute Positioning:

  - In this element positioned is relative to its closest positioned ancestor (or the initial containing block if there is no positioned ancestor).
  - An absolutely positioned element is taken out of the flow, and other elements will ignore its space.
  - Eg: position: absolute; top: 0; right: 0
  - In this example, the inner element is positioned at the top right corner of its closest positioned ancestor, which is the outer element with relative positioning.

- Sticky Positioning:

  - Sticky positioning is a hybrid between relative and fixed positioning.
  - A sticky positioned element behaves like a relatively positioned element until it reaches a specific threshold (usually when it reaches a specified top, bottom, left, or right value), and then it "sticks" to that position as the user scrolls.
  - Eg: position: sticky; top: 20px;
  - In this example, the element is positioned 20 pixels down from its normal position, but when the user scrolls and the element reaches that position, it sticks to the top of the viewport.

- Fixed Positioning:
  - In this element stays fixed even when the user scrolls the page.
  - Fixed positioned elements are fixed in a specific position on the screen, regardless of the scrolling behavior.
  - Example: position: fixed; top: 20px; right: 20px
    In this example, the element is positioned 20 pixels down from the top and 20 pixels from the right side of the viewport. It will remain fixed in that position even when the user scrolls.

### Ans 8. Build table – done [Periodic Table](https://github.com/aivy45/AssignMent-Ineuron/tree/main/CSS/periodicTable)

### Ans9. Build layout [Layout git hub link](https://github.com/aivy45/AssignMent-Ineuron/tree/main/CSS/Layout)

### Ans10. Build responsive layout [ Responsive Layout github link](https://github.com/aivy45/AssignMent-Ineuron/tree/main/CSS/ResponsiveLayout)

### Ans11. Home Page of Ineuron —--------------

### Ans 12.

- Pseudo-classes:

  - Pseudo-classes are preceded by a colon (:) and follow the selector.
  - Pseudo-classes are used to style elements based on various states,
  - such as :hover, :active, :focus, or based on their position, like :first-child, :nth-child(), or :last-child.

- Pseudo-elements:
  - Pseudo-elements create virtual elements that can be styled independently of the actual content of an element.
  - Pseudo-elements are preceded by double colons (::) and follow the selector.
  - Pseudo-elements are used to insert content before or after an element or selecting the first letter or line of an element.
- Common pseudo-elements include ::before, ::after.

- Key differences between pseudo-classes and pseudo-elements:
  - Pseudo-classes are preceded by a single colon (:), while pseudo-elements are preceded by double colons (::)
  - Pseudo-classes modify the style of the actual selected elements, whereas pseudo-elements add new elements to the DOM or target specific parts of an element's content.
