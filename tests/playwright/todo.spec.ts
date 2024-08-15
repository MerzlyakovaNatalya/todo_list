import { test, expect } from '@playwright/test'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/')
})

test.describe.serial('New Todo', () => {
  test('add todo', async ({ page }) => {
    await page.getByPlaceholder('What needs to be done?').click()
    await page.getByPlaceholder('What needs to be done?').fill('new task1')
    await page.getByPlaceholder('What needs to be done?').press('Enter')

    await page.getByPlaceholder('What needs to be done?').fill('new task2')
    await page.getByPlaceholder('What needs to be done?').press('Enter')

    await page.locator('#check-part-1').first().click()

    await page.getByRole('button', { name: 'Active' }).click()
    const activeTasksCount = await page.locator('text=new task1').count()
    expect(activeTasksCount).toBeGreaterThan(0)
  })

  test('should clear input after adding item', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?')
    await newTodo.fill('new task3')
    await newTodo.press('Enter')
    await expect(newTodo).toBeEmpty()
  })
})

test.describe.serial('Mark and delete completed', () => {
  test('Checkbox color change on click', async ({ page }) => {
    await page.getByPlaceholder('What needs to be done?').click()
    await page.getByPlaceholder('What needs to be done?').fill('new task1')
    await page.getByPlaceholder('What needs to be done?').press('Enter')
    const checkPart2 = await page.locator('#check-part-2').first()
    await checkPart2.click()
    await page.waitForTimeout(1000)
    const checkPart1 = await page.locator('#check-part-1').first()

    const checkPart1Element = await checkPart1.elementHandle();
    if (!checkPart1Element) throw new Error('Element #check-part-1 not found')

      await page.waitForFunction(
        (el) => window.getComputedStyle(el).backgroundColor === 'rgb(128, 128, 128)',
        checkPart1Element,
        { timeout: 120000 }
      )
    const color1 = await checkPart1.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )

    expect(color1).toBe('rgb(128, 128, 128)')
    const color2 = await checkPart2.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )
    expect(color2).toBe('rgb(128, 128, 128)')
    await checkPart2.click()
    const newColor1 = await checkPart1.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )
    expect(newColor1).toBe('rgb(12, 219, 125)')
    const newColor2 = await checkPart2.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )
    expect(newColor2).toBe('rgb(12, 219, 125)')
  })

  test('delete completed', async ({ page }) => {
    await page.getByRole('button', { name: 'Completed', exact: true }).click()
    await page.getByRole('button', { name: 'Clear completed' }).click()
    await expect(page.locator('.sc-dhKdPU.dslECW')).toHaveCount(0)
  })

  test('Complete all tasks and clear completed', async ({ page }) => {
    await page.waitForTimeout(2000)
    const allTasks = page.locator('#check-part-1')
    const taskCount = await allTasks.count()

    // Прокликать все незавершённые задачи, чтобы их завершить
    for (let i = 0; i < taskCount; i++) {
      const task = allTasks.nth(i)
      const backgroundColor = await task.evaluate(
        (el) => window.getComputedStyle(el).backgroundColor
      )
      if (backgroundColor === 'rgb(12, 219, 125)') {
        await task.click()
        await expect(task).toHaveCSS('background-color', 'rgb(128, 128, 128)')
      }
    }

    await page.waitForTimeout(2000)

    // Нажать кнопку "Clear completed"
    const clearButton = page.getByRole('button', { name: 'Clear completed' })
    await clearButton.click()

    //  Проверить, что задач не осталось в списке
    await expect(page.locator('#check-part-1')).toHaveCount(0)

    // Сделать скриншот и сохранить его в папку "screenshots"
    const screenshotDir = join(__dirname, 'screenshots')
    mkdirSync(screenshotDir, { recursive: true })
    const screenshotPath = join(screenshotDir, 'screenshot.png')
    await page.screenshot({ path: screenshotPath })

    // Проверка совпадения с эталонным скриншотом
    const baselineScreenshotPath = join(
      screenshotDir,
      'baseline_screenshot.png'
    )

    // Если эталонного скриншота еще нет, сохраняем текущий как эталон
    if (!existsSync(baselineScreenshotPath)) {
      await page.screenshot({ path: baselineScreenshotPath })
    } else {
      expect(await page.screenshot()).toMatchSnapshot(
        'baseline_screenshot.png',
        {threshold: 0.1}
      )
    }
  })
})
