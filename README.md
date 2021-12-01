# Introduction

Created for the following issue:
[Transloco prefixes "en" scope when using external library](https://github.com/ngneat/transloco/issues/523)

# For using Transloco inside a lazy loaded module

After pressing "Go to Demo" you will receive the following error:

```
ERROR Error: Uncaught (in promise): NullInjectorError: R3InjectorError(DemoModule)[TranslocoService -> TranslocoService -> InjectionToken TRANSLOCO_TRANSPILER -> InjectionToken TRANSLOCO_TRANSPILER -> InjectionToken TRANSLOCO_TRANSPILER]: 
  NullInjectorError: No provider for InjectionToken TRANSLOCO_TRANSPILER!
NullInjectorError: R3InjectorError(DemoModule)[TranslocoService -> TranslocoService -> InjectionToken TRANSLOCO_TRANSPILER -> InjectionToken TRANSLOCO_TRANSPILER -> InjectionToken TRANSLOCO_TRANSPILER]: 
  NullInjectorError: No provider for InjectionToken TRANSLOCO_TRANSPILER!
```
